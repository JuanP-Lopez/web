import { Component, input, signal } from '@angular/core';
import type { Slide } from "../../../src/types/Slide";

import { LucideChevronRight } from "@lucide/angular";

@Component({
  selector: 'app-carousel',
  imports: [LucideChevronRight],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {

  slides = input.required<Slide[]>();
  currentSlide = signal(0);

  private intervalId? : ReturnType<typeof setInterval>
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngOnDestroy() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide.update(current => {
      const total = this.slides().length;
      return (current + 1) % total;
    })
  }

}
