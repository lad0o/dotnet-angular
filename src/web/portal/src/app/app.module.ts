import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SapModule } from './features/sap/sap.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,           
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    SapModule,
    SharedModule,
    AppRoutingModule,        
    LoggerModule.forRoot({
      level: environment.logLevel,
      serverLogLevel: environment.logLevel,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
