import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuración del locale app
import localeEsCO from '@angular/common/locales/es-CO';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsCO)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      /* Establecer idioma por defecto a toda la aplicación */
      provide: LOCALE_ID, useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
