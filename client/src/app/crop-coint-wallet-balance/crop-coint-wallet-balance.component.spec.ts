import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropCointWalletBalanceComponent } from './crop-coint-wallet-balance.component';

describe('CropCointWalletBalanceComponent', () => {
  let component: CropCointWalletBalanceComponent;
  let fixture: ComponentFixture<CropCointWalletBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropCointWalletBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCointWalletBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
