import { TestBed } from '@angular/core/testing';

import { NotesCrudService } from './notes-crud.service';

describe('NotesCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesCrudService = TestBed.get(NotesCrudService);
    expect(service).toBeTruthy();
  });
});
