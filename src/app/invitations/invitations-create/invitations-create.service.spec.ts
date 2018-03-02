import { TestBed, inject } from '@angular/core/testing';

import { InvitationsCreateService } from './invitations-create.service';

describe('InvitationsCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitationsCreateService]
    });
  });

  it('should be created', inject([InvitationsCreateService], (service: InvitationsCreateService) => {
    expect(service).toBeTruthy();
  }));
});
