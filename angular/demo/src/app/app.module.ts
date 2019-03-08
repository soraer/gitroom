import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { RouterComponent } from './router/router.component';
import { ShengService } from './sheng.service';
import { MainwebComponent } from './mainweb/mainweb.component';
import { FormsModule } from '@angular/forms';
import { ShiComponent } from './shi/shi.component';
import { QuComponent } from './qu/qu.component';
import { ColorDirective } from './color.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from './router.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    RouterComponent,
    MainwebComponent,
    ShiComponent,
    QuComponent,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShengService,RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
