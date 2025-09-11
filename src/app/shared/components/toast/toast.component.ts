import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../service/toast.service';
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit {
  toasts: { message: string; type: 'success' | 'error' | 'info' }[] = [];
  constructor(public toastService: ToastService) { }


  ngOnInit(): void {
    this.toastService.toast$.subscribe(toast => {
      this.toasts.push(toast);
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t !== toast);
      }, 5000);
    });
  }


  toastClasses(type: 'success' | 'error' | 'info') {
    switch (type) {
      case 'success': return 'bg-green-500 text-white';
      case 'error': return 'bg-red-500 text-white';
      default: return 'bg-indigo-500 text-white';
    }
  }
}
