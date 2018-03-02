import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsComponent } from './invitations.component';
import { InvitationsCreateComponent } from './invitations-create/invitations-create.component';
import { FormsModule } from '@angular/forms';
import { InvitationsCreateService } from './invitations-create/invitations-create.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InvitationsComponent
  ],
  declarations: [
    InvitationsComponent,
    InvitationsCreateComponent
  ],
  providers: [InvitationsCreateService]
})
export class InvitationsModule { }
