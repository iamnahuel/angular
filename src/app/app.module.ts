import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SociosComponent } from './components/socios/socios.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AgregarSociosComponent } from './components/agregar-socios/agregar-socios.component';
import { ErrorHelperComponent } from './components/error-helper/error-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    AgregarSociosComponent,
    ErrorHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
