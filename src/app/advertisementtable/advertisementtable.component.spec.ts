import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementtableComponent } from './advertisementtable.component';

describe('AdvertisementtableComponent', () => {
  let component: AdvertisementtableComponent;
  let fixture: ComponentFixture<AdvertisementtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
