import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEmailService } from './components/create-email.service';
import { CreateEmail } from './components/create-email.component';

@NgModule({
  declarations: [CreateEmail],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CreateEmailService],
})
export class AppModule {}
