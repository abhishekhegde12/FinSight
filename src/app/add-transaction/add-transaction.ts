import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-transaction.html',
  styleUrl: './add-transaction.css',
})
export class AddTransactionComponent {

}
