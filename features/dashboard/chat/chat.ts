import { Component, signal } from '@angular/core';

// Messages Interface
import { ChatMessage } from "../../../src/app/core/models/chat.models";

//Components
import { ChatInput } from "./chat-input/chat-input";
import { UserMessage } from "./user-message/user-message";
import { AgentResponse } from "./agent-response/agent-response";

//Icon UI
import { LucideUser, LucideDot } from "@lucide/angular";

@Component({
  selector: 'app-chat',
  imports: [LucideUser, LucideDot, ChatInput, UserMessage, AgentResponse],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {

  messages = signal<ChatMessage[]>([]);

  onSendMessage ( content : string ) : void {
    console.log("Mensaje recibido en chat: ", content);

    const newMessage : ChatMessage = {
      id : crypto.randomUUID(),
      content : content,
      role : 'user',
      sentAt : new Date()
    };

    this.messages.update(current => [
      ...current,
      newMessage
    ]);

    console.log("Mensajes actuales: ", this.messages());

    console.log("Message Sent: ", newMessage);
  }

}
