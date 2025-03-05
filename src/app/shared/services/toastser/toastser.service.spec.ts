import { TestBed } from '@angular/core/testing';

import { ToastserService } from './toastser.service';

describe('ToastserService', () => {
  let service: ToastserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
