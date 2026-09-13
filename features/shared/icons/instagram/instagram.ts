import { Component } from '@angular/core';

import { siInstagram } from "simple-icons";

@Component({
  selector: 'app-instagram',
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
  styleUrl: './instagram.css',
})
export class Instagram {
  protected readonly icon = siInstagram;
  protected readonly size = 32;
}
