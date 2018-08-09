import {Component, ElementRef, OnInit, AfterViewInit, Renderer2} from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  animations: [
    trigger('swiperState', [
      state('left', style({
        left: -window.innerWidth
      })),
      state('right', style({
        left: '0px'
      })),
      state('beforeLeft', style({
        left: '0px'
      })),
      state('beforeRight', style({
        left: -window.innerWidth
      })),
      transition('beforeRight => right', animate('200ms ease-in')),
      transition('beforeLeft => left', animate('200ms ease-in')),
    ])
  ]
})
export class SwiperComponent implements OnInit, AfterViewInit {
  container: any;
  preSlide: any;
  nextSlide: any;
  slide: any;
  slideState: string;
  wrapper: any;
  slideArr: string[];
  slideIndex: number;

  // // @ViewChild('preImg')
  // preImg: any;
  //
  // // @ViewChild('nextImg')
  // nextImg: any;

  constructor(private elementRef: ElementRef, renderer: Renderer2) {

  }

  // timer1: any;
  // imgArr: string[];
  // imgIndex: number;

  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.swiper-container');
    this.container.style.width = window.innerWidth + 'px';
    this.wrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
    this.wrapper.style.width = (2 * window.innerWidth) + 'px';
    this.slide = this.elementRef.nativeElement.querySelector('.swiper-slide');
    this.slide.style.width = window.innerWidth + 'px';
    this.preSlide = this.elementRef.nativeElement.querySelector('#preSlide');
    this.nextSlide = this.elementRef.nativeElement.querySelector('#nextSlide');
    this.preSlide.style.width = window.innerWidth + 'px';
    this.nextSlide.style.width = window.innerWidth + 'px';
    // this.elementRef.nativeElement.querySelector('.swiper-slide img').width = window.innerWidth + 'px';
    // console.log(this.elementRef.nativeElement.querySelector('.swiper-slide img').width);


    // this.preImg = this.elementRef.nativeElement.querySelector('#preImg');
    // this.nextImg = this.elementRef.nativeElement.querySelector('#nextImg');
    // this.preImg.style.width = window.innerWidth + 'px';
    // this.nextImg.style.width = window.innerWidth + 'px';
    // console.log(this.nextImg);
    // console.log(window.innerWidth);
  }

  ngOnInit() {
    // this.imgArr = [
    //   '../../assets/images/1111.png',
    //   '../../assets/images/2222.png',
    //   '../../assets/images/3333.png',
    //   '../../assets/images/4444.png',
    //   '../../assets/images/837471_image3.png'
    // ];
    // this.imgIndex = 0;
    this.slideArr = [
      '<h1>1111</h1>',
      '<img src="../../assets/images/837471_image3.png" alt="">',
      '<h1>3333</h1>',
      '<h1>4444</h1>',
      '<h1>5555</h1>',
      '<h1>6666</h1>'
    ];
    this.slideIndex = 0;
  }
  //
  // moveTo(istart: number, itarget: number) {
  //   // clearInterval(this.timer1);
  //   const wrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
  //   wrapper.style.left = istart + 'px';
  //   // this.timer = setInterval(() => {
  //   this.timer1 = setInterval(() => {
  //     const speed = 100;
  //     if (wrapper.offsetLeft === itarget - 100) {
  //       // speed = -1;
  //       wrapper.style.left = istart + 'px';
  //       clearInterval(this.timer1);
  //     }
  //     wrapper.style.left = wrapper.offsetLeft + speed + 'px';
  //   }, 30);
  //   // clearInterval(this.timer1);
  //   // }, 5000);
  //
  // }

  toNext() {
// 每次状态切换前进入预状态 将图片填充 位置调整
    this.slideState = 'beforeLeft';
    if (this.slideIndex === this.slideArr.length - 1) {
      this.slideIndex = 0;
      this.nextSlide.innerHTML = this.slideArr[1];
    } else {
      this.nextSlide.innerHTML = this.slideArr[this.slideIndex + 1];
      this.slideIndex++;
    }
    this.preSlide.innerHTML = this.slideArr[this.slideIndex];
    // 延迟100ms 等待图片加载
    setTimeout(() => {
      this.slideState = 'left';
    }, 100);
  }

  toPre() {
    this.slideState = 'beforeRight';
    this.nextSlide.innerHTML = this.slideArr[this.slideIndex];
    if (this.slideIndex === 0) {
      this.slideIndex = this.slideArr.length - 1;
      this.preSlide.innerHTML = this.slideArr[this.slideArr.length - 1];
    } else {
      this.preSlide.innerHTML = this.slideArr[this.slideIndex - 1];
      this.slideIndex--;
    }
    console.log(this.slideIndex);
    // 延迟100ms 等待图片加载
    setTimeout(() => {
      this.slideState = 'right';
    }, 100);
  }

//   toLeft() {
// // 每次状态切换前进入预状态 将图片填充 位置调整
//     this.preImg.src = this.imgArr[this.imgIndex];
//     if (this.imgIndex === this.imgArr.length - 1) {
//       this.imgIndex = 0;
//       this.nextImg.src = this.imgArr[1];
//     } else {
//       this.nextImg.src = this.imgArr[this.imgIndex + 1];
//       this.imgIndex++;
//     }
//     this.slideState = 'beforeLeft';
//     // 延迟100ms 等待图片加载
//     setTimeout(() => {
//       this.slideState = 'left';
//     }, 100);
//   }
//
//   toRight() {
//     this.nextImg.src = this.imgArr[this.imgIndex];
//     if (this.imgIndex === 0) {
//       this.imgIndex = this.imgArr.length - 1;
//       this.preImg.src = this.imgArr[this.imgArr.length - 1];
//     } else {
//       this.preImg.src = this.imgArr[this.imgIndex - 1];
//       this.imgIndex--;
//     }
//     this.slideState = 'beforeRight';
//     // 延迟100ms 等待图片加载
//     setTimeout(() => {
//       this.slideState = 'right';
//     }, 100);
//   }
}

