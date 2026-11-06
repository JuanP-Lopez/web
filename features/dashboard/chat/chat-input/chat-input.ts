import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

//UI Icon
import { LucideSend } from "@lucide/angular";

@Component({
  selector: 'app-chat-input',
  imports: [LucideSend, ReactiveFormsModule],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css',
})
export class ChatInput {

  sendMessage = output<string>();

  messageControl = new FormControl('', {
    nonNullable : true,
    validators : [Validators.required]
  });

  onSubmit (event : SubmitEvent) : void {
    event.preventDefault();
    console.log("Formulario interceptado por Angular");

    const message = this.messageControl.value.trim();

    console.log("Mensaje: ", message);

    if (!message) return;

    this.sendMessage.emit(message);
    console.log("Se emitio sendMessage");
    this.messageControl.reset();
  }

}
