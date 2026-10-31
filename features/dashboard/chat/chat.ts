import { Component } from '@angular/core';

//Components
import { ChatInput } from "./chat-input/chat-input";

//Icon UI
import { LucideUser, LucideDot } from "@lucide/angular";

@Component({
  selector: 'app-chat',
  imports: [LucideUser, LucideDot, ChatInput],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {}
