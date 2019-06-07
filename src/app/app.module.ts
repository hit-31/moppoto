// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
// Routing
import { AppRoutingModule } from './/app-routing.module';
// auth-guard
import { AuthGuard } from 'src/app/core/guards/auth-guard';
// Component
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
