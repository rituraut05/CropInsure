import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgbarExampleComponent } from './progbar-example.component';

describe('ProgbarExampleComponent', () => {
  let component: ProgbarExampleComponent;
  let fixture: ComponentFixture<ProgbarExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgbarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
