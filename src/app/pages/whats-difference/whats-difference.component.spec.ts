import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsDifferenceComponent } from './whats-difference.component';

describe('WhatsDifferenceComponent', () => {
  let component: WhatsDifferenceComponent;
  let fixture: ComponentFixture<WhatsDifferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsDifferenceComponent]
    });
    fixture = TestBed.createComponent(WhatsDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
