import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-transaction.html',
  styleUrl: './add-transaction.css'
})
export class AddTransactionComponent {

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    console.log('Transaction Data:', form.value);

    // later → API call

    this.router.navigate(['/view-transaction']);
  }
}
