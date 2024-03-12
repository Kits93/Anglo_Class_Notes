import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  private fecharModalSubject = new Subject<void>();

  fecharModal() {
    this.fecharModalSubject.next();
  }

  get fecharModal$() {
    return this.fecharModalSubject.asObservable();
  }
}
