import { Component } from '@angular/core';

//UI Icon
import { LucideSend } from "@lucide/angular";

@Component({
  selector: 'app-chat-input',
  imports: [LucideSend],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css',
})
export class ChatInput {}
