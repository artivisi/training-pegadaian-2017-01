/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransaksiService } from './transaksi.service';

describe('TransaksiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransaksiService]
    });
  });

  it('should ...', inject([TransaksiService], (service: TransaksiService) => {
    expect(service).toBeTruthy();
  }));
});
