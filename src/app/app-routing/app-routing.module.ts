import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {BannerComponent} from '../banner/banner.component';


const routes: Routes = [
  // { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: AppComponent },
  { path: 'banner', component: BannerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
