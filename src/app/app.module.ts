import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {BannerComponent} from './banner/banner.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {SwiperModule} from 'ngx-swiper-wrapper';
import {SwiperComponent} from './swiper/swiper.component';
import {TestdirectiveComponent} from './testdirective/testdirective.component';
import {TestdirDirective} from './testdir.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    BannerComponent,
    SwiperComponent,
    TestdirectiveComponent,
    TestdirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // declare var Swiper:any;
}
