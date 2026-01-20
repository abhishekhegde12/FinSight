// src/app/login/login.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
// import { FormValidationDirective  } from './form-validation.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  
  showPassword: boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted!', form.value);
    } else {
      console.log('Form invalid.');
    }
  }
  onGoogleLogin() {
    console.log('Initiating Google Login workflow...');
  }
  onMobileLogin() {
    console.log('Initiating Mobile Workflow...');
  }
  onDigiLogin() {
    console.log('Initiating DigiLocker Workflow...');
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
