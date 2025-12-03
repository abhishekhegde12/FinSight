import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegComponent {
  
  // --- 1. Missing Properties (Add these) ---
  emailVerified = false;
  otpSent = false;
  showPassword = false;
  showConfirmPass = false;

  // --- 2. Toggle Functions ---
  togglePass() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPass() {
    this.showConfirmPass = !this.showConfirmPass;
  }

  // --- 3. Logic for Buttons ---
  onVerifyEmail() {
    // Simulate API call
    console.log("Sending verification email...");
    alert("Verification link sent to your email!");
    this.emailVerified = true; // This enables the Register button
  }

  onSendOtp() {
    // Simulate API call
    console.log("Sending OTP...");
    alert("OTP sent to your mobile number!");
    this.otpSent = true; // This reveals the OTP input box
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Manual check for password match
      if (form.value.password !== form.value.cPassword) {
        alert("Passwords do not match!");
        return;
      }
      
      console.log("Registration Data:", form.value);
      alert("Registration Successful!");
    } else {
      console.log("Form is invalid");
    }
  }
}