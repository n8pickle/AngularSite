import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableLikeButtonComponent } from './reusable-like-button.component';

describe('ReusableLikeButtonComponent', () => {
  let component: ReusableLikeButtonComponent;
  let fixture: ComponentFixture<ReusableLikeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableLikeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableLikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
