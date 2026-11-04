import { Component, input } from '@angular/core';

//Interface
import { UserStatistics } from "../../../src/app/core/models/user-statistics";

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {

  statistics = input<UserStatistics | null>(null);

}
