import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdirectiveComponent } from './testdirective.component';

describe('TestdirectiveComponent', () => {
  let component: TestdirectiveComponent;
  let fixture: ComponentFixture<TestdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
