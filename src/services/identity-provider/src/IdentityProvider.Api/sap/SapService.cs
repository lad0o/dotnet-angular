using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

public class SapService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _config;

    public SapService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _config = config;
    }

    public async Task<SapUser?> GetEmployeeAsync(string pernr)
    {
        var baseUrl = "http://sapapd.railway.ge:8000/sap/zemployee_api";
        var sapUser = _config["SapSettings:User"];
        var sapPass = _config["SapSettings:Password"];

        var requestUrl = $"{baseUrl}?PERNR={pernr}";
        var request = new HttpRequestMessage(HttpMethod.Get, requestUrl);

        var byteArray = System.Text.Encoding.ASCII.GetBytes($"{sapUser}:{sapPass}");
        request.Headers.Authorization = new AuthenticationHeaderValue("Basic", System.Convert.ToBase64String(byteArray));

        var response = await _httpClient.SendAsync(request);

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadAsStringAsync();
            throw new HttpRequestException($"SAP API returned {response.StatusCode}: {error}");
        }
        var json = await response.Content.ReadAsStringAsync();

        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        var sapUserData = JsonSerializer.Deserialize<SapUser>(json, options);
        return sapUserData;
    }

    // public async Task<SapUser?> GetEmployeeAsync(string pernr)
    // {
    //     var data = new SapUser()
    //     {
    //         pernr = 808080, firstName = "Lado", lastName = "Geradze", birthDate = "2001-09-09", positionId = 323232, positionText = "Programmer"
    //     };
    //     return data.pernr.ToString() == pernr ? data : null;
    // }
}
