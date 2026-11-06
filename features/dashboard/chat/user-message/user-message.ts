import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-message',
  imports: [],
  templateUrl: './user-message.html',
  styleUrl: './user-message.css',
})
export class UserMessage {
  content = input.required<string>();
}
