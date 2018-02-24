import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsComponent } from './invitations.component';
import { InvitationsCreateComponent } from './invitations-create/invitations-create.component';
import { FormsModule } from '@angular/forms';

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
  ]
})
export class InvitationsModule { }
