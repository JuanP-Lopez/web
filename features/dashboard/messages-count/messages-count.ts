import { Component, input } from '@angular/core';

//Interface
import { UserStatistics } from "../../../src/app/core/models/user-statistics";

@Component({
  selector: 'app-messages-count',
  imports: [],
  templateUrl: './messages-count.html',
  styleUrl: './messages-count.css',
})
export class MessagesCount {

  statistics = input<UserStatistics | null>(null);

}
