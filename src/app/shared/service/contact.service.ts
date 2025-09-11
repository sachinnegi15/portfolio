import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendContactEmail(data: { name: string; email: string; message: string }): Observable<EmailJSResponseStatus> {
    const payload = {
      from_name: data.name,
      from_email: data.email,
      message: data.message
    };

    // Use `from()` to wrap the Promise into an Observable
    return from(
      emailjs.send(environment.emailJs.serviceId, environment.emailJs.templateId, payload, environment.emailJs.publicKey)
    );
  }
}
