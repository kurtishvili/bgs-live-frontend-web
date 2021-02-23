import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastMessage } from 'src/app/models/bgs-toast-message.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toast: Subject<ToastMessage> = new Subject();
  toast$ = this.toast.asObservable();

  constructor() { }

  add(message: ToastMessage) {
    this.toast.next(message);
  }
}
