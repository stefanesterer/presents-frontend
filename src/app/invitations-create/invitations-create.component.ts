import{Component, OnInit}from '@angular/core';
import {InvitationCreate}from './invitation-create';

@Component({
  selector: 'app-invitations-create',
  templateUrl: './invitations-create.component.html',
  styleUrls: ['./invitations-create.component.css']
})
export class InvitationsCreateComponent implements OnInit {

  invitationCreate : InvitationCreate = {
    name: "", email: ""}

  constructor() { }

  ngOnInit() {
  }

  create(): void {
    console.log(this.invitationCreate);
  // todo: communicate with rest backend and get back UUID
  }

}
