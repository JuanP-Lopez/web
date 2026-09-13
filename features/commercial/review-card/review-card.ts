import { Component, input } from '@angular/core';
import type { Review } from "../../../src/types/Review";

import { LucideStar } from "@lucide/angular";

@Component({
  selector: 'app-review-card',
  imports: [LucideStar],
  templateUrl: './review-card.html',
  styleUrl: './review-card.css',
})
export class ReviewCard {

  review = input.required<Review>();
  readonly ratingScale = [1, 2, 3, 4, 5];
}
