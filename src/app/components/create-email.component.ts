import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CreateEmailService } from './create-email.service';
/**
 * This class contains the CRUD operations for creating email
 */
@Component({
  selector: 'app-create-email',
  templateUrl: './create-email.component.html',
  styleUrls: ['./create-email.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateEmail implements OnInit {
  senderEmail: string = '';
  recipientEmail: string = '';
  subject: string = '';
  emailBody: string = '';
  timeStamp: string = '';
  constructor(private readonly createEmailService: CreateEmailService) {}

  ngOnInit() {}

  /**
   * Method to post email
   */
  createEmail() {
    let params = {
      senderEmail: 'lakshmilekhana21@gmail.com',
      recipientEmail: 'dynatrace@gmail.com',
      subject: 'attatching of assisgnment ',
      emailBody: 'Hello, Have a Good Day',
      timeStamp: '2023-11-15',
    };
    this.createEmailService.createEmail(params).subscribe({
      next: (response) => {
        console.log('Email Sent Successfully', response);
      },
      error: (error) => {
        console.log('Failed to send email', error);
      },
    });
  }
}
