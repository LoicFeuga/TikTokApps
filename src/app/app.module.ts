import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './posts/first/first.component';
import {SecondComponent} from './posts/second/second.component';
import {ThirdComponent} from './posts/third/third.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FourthComponent} from './posts/fourth/fourth.component';
import {FifthComponent} from './posts/fifth/fifth.component';
import {SixthComponent} from './posts/sixth/sixth.component';
import {SeventhComponent} from './posts/seventh/seventh.component';
import {EighthComponent} from './posts/eighth/eighth.component';
import {NinethComponent} from './posts/nineth/nineth.component';
import {TenthComponent} from './posts/tenth/tenth.component';
import {ChartModule} from "angular2-chartjs";
import {EleventhComponent} from './posts/eleventh/eleventh.component';
import {SwiperModule} from 'swiper/angular';
import {TwelfthComponent} from './posts/twelfth/twelfth.component';
import {FormBuilderComponent} from './lab/form-builder/form-builder.component';
import {P1Component} from './posts/p1/p1.component';
import {HttpClientModule} from "@angular/common/http";
import {P2Component} from './posts/p2/p2.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {P3Component} from './posts/p3/p3.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { P4Component } from './posts/p4/p4.component';
import { P5Component } from './posts/p5/p5.component';
import { P6Component } from './posts/p6/p6.component';
import { P7Component } from './posts/p7/p7.component';
import { P7DetailComponent } from './posts/p7-detail/p7-detail.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    EighthComponent,
    NinethComponent,
    TenthComponent,
    EleventhComponent,
    TwelfthComponent,
    FormBuilderComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    P6Component,
    P7Component,
    P7DetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    SwiperModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
