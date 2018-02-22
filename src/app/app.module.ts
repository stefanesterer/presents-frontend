import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { InvitationsCreateComponent } from './invitations-create/invitations-create.component';


@NgModule({
  declarations: [
    AppComponent,
    InvitationsComponent,
    InvitationsCreateComponent
  ],
  imports: [
    BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
