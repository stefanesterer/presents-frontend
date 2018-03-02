import { Injectable } from '@angular/core';
import { InvitationCreate } from './invitation-create';

@Injectable()
export class InvitationsCreateService {

  constructor() { }

  create(invitationCreate: InvitationCreate): void {
    console.log(invitationCreate);
    // todo: communicate with rest backend and get back UUID
  }

}
