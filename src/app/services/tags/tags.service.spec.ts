import { TestBed, inject } from '@angular/core/testing';

import { TagService } from './tags.service';

describe('TagsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagService]
    });
  });

  it('should be created', inject([TagService], (service: TagService) => {
    expect(service).toBeTruthy();
  }));
});
