import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../shared/service/toast.service';
import { ContactService } from '../../shared/service/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor(private toastService: ToastService, private contactService: ContactService) { }

  contactForm!: FormGroup;
  isSending: boolean = false;
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  async onSubmit() {

    console.log(this.contactForm.value);
    if (this.contactForm.invalid) return;
    this.isSending = true;
    const formData = this.contactForm.value;

    this.contactService.sendContactEmail(formData).subscribe({
      next: (res) => {
        console.log('Email sent:', res.text);
        this.toastService.success('Message sent! I’ll get back to you soon');
        this.isSending = false;
        this.contactForm.reset();
      },
      error: (err) => {
        console.error('Email send failed:', err);
        this.isSending = false;
        this.toastService.error('Something went wrong. Please try again later.');
      },
      complete: () => {
        this.isSending = false;
      }
    });

  }
}



