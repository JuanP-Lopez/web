import { Component, input } from '@angular/core';

@Component({
  selector: 'app-agent-response',
  imports: [],
  templateUrl: './agent-response.html',
  styleUrl: './agent-response.css',
})
export class AgentResponse {
  content = input.required<string>();
}
