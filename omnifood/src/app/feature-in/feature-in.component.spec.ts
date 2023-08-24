import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureInComponent } from './feature-in.component';

describe('FeatureInComponent', () => {
  let component: FeatureInComponent;
  let fixture: ComponentFixture<FeatureInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureInComponent]
    });
    fixture = TestBed.createComponent(FeatureInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
