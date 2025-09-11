import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  private toastSubject = new Subject<{ message: string, type: 'success' | 'error' | 'info' }>();
  toast$ = this.toastSubject.asObservable();


  success(message: string) {
    this.toastSubject.next({ message, type: 'success' });
  }

  error(message: string) {
    this.toastSubject.next({ message, type: 'error' })
  }

  info(message: string) {
    this.toastSubject.next({ message, type: 'info' });
  }
}
