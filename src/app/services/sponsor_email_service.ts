import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private apiUrl = "https://api.emailjs.com/api/v1.0/email/send";
  private userId = "WT-0gtWGVOJEOyYao";
  private serviceId = "service_21wui8i";
  private templateId = "template_jbq5jqr";

  constructor(private http: HttpClient) {}

  sendEmail(params: any): Observable<any> {
    const body = {
      service_id: this.serviceId,
      template_id: this.templateId,
      user_id: this.userId,
      template_params: params,
    };

    return this.http.post(this.apiUrl, body, {
      headers: { "Content-Type": "application/json" },
      responseType: "text",
    });
  }
}