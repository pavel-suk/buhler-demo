
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Machine } from '@models/machine.interface';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private readonly http = inject(HttpClient)
  
  // Note: delay is added for demo purposes, do not include in production! :)
  readonly data = toSignal(this.fetchRemoteData(), {
    initialValue: new Array(),
  });

  fetchRemoteData() {
    return this.http.get<Machine[]>(
      '/machines.json'
    );
  }

}
