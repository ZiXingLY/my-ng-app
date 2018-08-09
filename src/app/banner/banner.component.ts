import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  loginStatus: boolean;
  isHover: boolean;
  constructor(private loginService: LoginService) { }
  getLoginStatus(): void {
    this.loginStatus = this.loginService.getLoginStatus();
  }
  hiddenAuthor() {
    this.isHover = true;
  }
  showAuthor() {
    this.isHover = false;
  }
  ngOnInit() {
    this.isHover = true;
  }

}
