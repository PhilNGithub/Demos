import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from '../shared/services/person.service';

@Component({
  selector: 'app-chat-nickname',
  templateUrl: './chat-nickname.component.html',
  styleUrls: ['./chat-nickname.component.css']
})
export class ChatNicknameComponent implements OnInit {

  public message: string;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  public createNickname(nickname: string): void {
    // alert(nickname);

    Person.Nickname = nickname;

    // variante mit service
    this.personService.setNickname(nickname);
    this.message = 'nickname: >' + nickname + '< wurde erstellt';
    // alert(Person.Nickname);
  }
}
