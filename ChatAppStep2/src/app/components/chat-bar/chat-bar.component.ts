import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  public chatMessage: string;

  constructor() { }

  ngOnInit() {
  }

  public addMessage(message: string): void {
    alert(message);
    console.log(message);
    this.chatMessage = '';
  }

  public showMessage(): void {
    alert(this.chatMessage);
    this.chatMessage = '';
  }
}
