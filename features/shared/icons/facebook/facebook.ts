import { Component } from '@angular/core';

import { siFacebook } from "simple-icons";

@Component({
  selector: 'app-facebook',
  imports: [],
  template: `
    <svg
      viewBox="0 0 24 24"
      [attr.width]="size"
      [attr.height]="size"
      [attr.fill]="'currentColor'"
      aria-hidden="true"
    >
      <path [attr.d]="icon.path"/>
    </svg>
  `,
  styleUrl: './facebook.css',
})
export class Facebook {
  protected readonly icon = siFacebook;
  protected readonly size = 32;
}
