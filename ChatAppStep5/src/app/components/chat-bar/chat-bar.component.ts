import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PersonService } from '../shared/services/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {

  @Output() submitMessage: EventEmitter<string> = new EventEmitter();
  public chatMessage: string;
  public message: string;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  public addMessage(message: string): void {

    // variante mit service
    // this.personService.getNickname();

    if (Person.Nickname) {
      message = `${Person.Nickname} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;

      this.submitMessage.emit(message);

      console.log(message);
      this.chatMessage = '';
    } else {
      // alert('kein nickname vorhanden...');
      this.message = 'kein nickname vorhanden...';
    }

  }

  public addMessageWithService(message: string): void {
    if (this.personService.getNickname()) {
      this.chatMessage = '';

      // message = `${Person.Nickname}: \n${message}`;
      message = `${this.personService.getNickname()} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;
      this.submitMessage.emit(message);
    } else {
      alert('kein nickname vorhanden!');
    }
  }
}
