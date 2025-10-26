using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("sap")]
public class SapController : ControllerBase
{
    private readonly SapService _sapService;
    public SapController(SapService sapService)
    {
        _sapService = sapService;
    }

    [HttpGet("employee/{pernr}")]
    public async Task<IActionResult> GetEmployee(string pernr)
    {
        var emp = await _sapService.GetEmployeeAsync(pernr);
        return emp is not null ? Ok(emp) : NotFound($"Employee {pernr} not found.");
    }
}
