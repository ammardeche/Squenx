import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPlatformComponent } from './trading-platform.component';

describe('TradingPlatformComponent', () => {
  let component: TradingPlatformComponent;
  let fixture: ComponentFixture<TradingPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingPlatformComponent]
    });
    fixture = TestBed.createComponent(TradingPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
