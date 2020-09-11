import { TestBed } from '@angular/core/testing';

import { HttpcommunicationService } from './httpcommunication.service';

describe('HttpcommunicationService', () => {
  let service: HttpcommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
