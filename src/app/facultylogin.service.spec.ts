import { TestBed, inject } from '@angular/core/testing';

import { FacultyloginService } from './facultylogin.service';

describe('FacultyloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyloginService]
    });
  });

  it('should be created', inject([FacultyloginService], (service: FacultyloginService) => {
    expect(service).toBeTruthy();
  }));
});
