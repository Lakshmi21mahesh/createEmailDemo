import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
/**
 * This class is a service class that provides the api calls for that particular component
 */
@Injectable()
export class CreateEmailService extends BaseHttpService {
  //Here I am using a
  private apiurl = 'https://api.emailsender.com/webhook';

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * This method serves as the post api for posting the data to the server
   * @param emailData
   * @returns
   */
  createEmail(emailData: any): Observable<any> {
    let queryparams = new HttpParams();
    if (emailData) {
      const senderEmail = emailData.senderEmail;
      const recipientEmail = emailData.recipientEmail;
      const subject = emailData.subject;
      const emailBody = emailData.emailBody;
      const timeStamp = emailData.timeStamp;

      queryparams = queryparams.set('fromAddress', senderEmail);
      queryparams = queryparams.set('toAddress', recipientEmail);
      queryparams = queryparams.set('emailBody', emailBody);
      queryparams = queryparams.set('subject', subject);
      queryparams = queryparams.set('timeStamp', timeStamp);
    }
    const url = `${this.apiurl}`;
    return this.create(url, queryparams);
  }
}
