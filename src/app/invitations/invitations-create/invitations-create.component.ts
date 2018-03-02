import { Component, OnInit } from '@angular/core';
import { InvitationCreate } from './invitation-create';
import { InvitationsCreateService } from './invitations-create.service';

@Component({
  selector: 'app-invitations-create',
  templateUrl: './invitations-create.component.html',
  styleUrls: ['./invitations-create.component.css']
})
export class InvitationsCreateComponent implements OnInit {

  invitationCreate: InvitationCreate = {
    name: "", email: ""
  }

  constructor(private invitationCreateService: InvitationsCreateService) { }

  ngOnInit() {
  }

  create(): void {
    this.invitationCreateService.create(this.invitationCreate);
  }

}
