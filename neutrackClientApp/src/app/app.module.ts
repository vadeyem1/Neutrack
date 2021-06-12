import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NutritionistComponent } from './nutritionist/nutritionist.component';
import { DashbordComponent } from './nutritionist/dashbord/dashbord.component';
import { AccountComponent } from './nutritionist/account/account.component';
import { PatientsComponent } from './nutritionist/patients/patients.component';
import { CalculatorComponent } from './nutritionist/calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './forms/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NutritionistComponent,
    DashbordComponent,
    AccountComponent,
    PatientsComponent,
    CalculatorComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    FormsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
