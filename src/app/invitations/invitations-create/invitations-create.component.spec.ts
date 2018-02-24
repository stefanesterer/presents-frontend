import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationsCreateComponent } from './invitations-create.component';

describe('InvitationsCreateComponent', () => {
  let component: InvitationsCreateComponent;
  let fixture: ComponentFixture<InvitationsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
