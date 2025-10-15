import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmchiLib } from './amchi-lib';

describe('AmchiLib', () => {
  let component: AmchiLib;
  let fixture: ComponentFixture<AmchiLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmchiLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmchiLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
