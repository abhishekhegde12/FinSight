import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule , FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-transaction.html',
  styleUrl: './add-transaction.css',
})
export class AddTransactionComponent {
  txForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.txForm = this.fb.group({
      date: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required],
      party: ['', Validators.required],
      txnNo: ['', Validators.required],
      vendor: ['', Validators.required],
      remarks: ['']
    });
  }

  save() {
    if (this.txForm.invalid) return;

    console.log('Transaction saved:', this.txForm.value);

    //API Calling

    this.router.navigate(['/view-transaction']);
  }
}
