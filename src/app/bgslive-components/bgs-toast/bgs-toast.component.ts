import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Severity } from 'src/app/enums/severity-enum';
import { ToastMessage } from 'src/app/models/bgs-toast-message.model';
import { ToastService } from './toast.service';

@Component({
  selector: 'bgs-toast',
  templateUrl: './bgs-toast.component.html',
  styleUrls: ['./bgs-toast.component.scss'],
  animations: [
    trigger('slideIn', [
      state('*', style({
        opacity: 1
      })),
      state('void',
        style({ bottom: '-130px', opacity: 0 })
      ),
      transition('void => *', animate('.5s ease-in-out'))
    ]),
    trigger('slideOut', [
      state('*',
        style({ opacity: 1, })
      ),
      state('void',
        style({ opacity: 0, bottom: '130px' })
      ),
      transition('* => void', animate('.5s ease-in')),
    ])
  ]
})
export class BgsToastComponent implements OnInit {

  messages: ToastMessage[] = [];

  constructor(private readonly toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.toast$.subscribe(
      message => {
        this.messages.push(message);

        setTimeout(() => {
          this.messages.shift();
        }, 3000)
      }
    )
  }

  getColor(toast) {
    switch (toast) {
      case Severity.Success:
        return 'green'
      case Severity.Error:
        return '#7d121261'
    }
  }
}