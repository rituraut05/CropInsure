import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarStoryComponent } from './progress-bar-story.component';

describe('ProgressBarStoryComponent', () => {
  let component: ProgressBarStoryComponent;
  let fixture: ComponentFixture<ProgressBarStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
