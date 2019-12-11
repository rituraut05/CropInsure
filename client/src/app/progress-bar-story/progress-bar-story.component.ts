// @Component({
//   selector: 'app-progress-bar-story',
//   templateUrl: './progress-bar-story.component.html',
//   styleUrls: ['./progress-bar-story.component.css']
// })
// export class ProgressBarStoryComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
// /*
//  * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
//  * This software is released under MIT license.
//  * The full license information can be found in LICENSE in the root directory of this project.
//  */

import { Component, HostBinding } from '@angular/core';
import { ProgbarExampleComponent } from '../progbar-example/progbar-example.component';
import { interval, Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'clr-progress-bar-story-demo',
  template: `
    <div class="story-message" style="margin-bottom: 1rem" width="50%">
      <p *ngIf="storyProgressBar.value <= 25">
        <clr-icon shape="cog" size="24"></clr-icon>Uploading Form<clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value > 25 && storyProgressBar.value <= 50">
        <clr-icon shape="install" size="24"></clr-icon>Extracting Insurance Data<clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value > 50 && storyProgressBar.value <= 75">
        <clr-icon shape="download-cloud" size="24"></clr-icon>Verifying Insurance Data<clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value > 75 && storyProgressBar.value < 100">
        <clr-icon shape="step-forward-2" size="24"></clr-icon>Generating Structured Form Data<clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value == 100">
        <clr-icon shape="success-standard" size="24"></clr-icon>Processing Done
      </p>
    </div>
    <div [ngClass]="storyProgressBar.cssClassnames()">
      <progress value="{{storyProgressBar.value}}" max="100" [attr.data-displayval]="storyProgressBar.value + '%'"></progress>
    </div>
  `,
})
export class ProgressBarStoryDemo {
  storyProgressBar: ProgbarExampleComponent;
  storyTime;

  constructor() {
    this.storyProgressBar = new ProgbarExampleComponent();
    this.storyTime = timer(7500, 7500).pipe(take(10));
  }

  @HostBinding('style.width.%') width = 100;

  ngOnInit() {
    this.storyProgressBar.start();
    this.storyTime.subscribe(() => {
      this.tellStoryAgain();
    });
  }

  tellStoryAgain() {
    if (this.storyProgressBar.isFinished()) {
     
    }
  }
}