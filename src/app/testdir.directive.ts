import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[appTestdir]'
})
export class TestdirDirective {
  test: number;

  @Input() set myTestDir(intest: number) {
    this.test = intest;
  }

  @Output() scroll = new EventEmitter();

  constructor() { }

}
