import { Component } from '@angular/core';

import { siYoutube } from "simple-icons";

@Component({
  selector: 'app-youtube',
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
  styleUrl: './youtube.css',
})
export class Youtube {
  protected readonly icon = siYoutube;
  protected readonly size = 32;
}
