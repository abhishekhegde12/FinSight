import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-transaction',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-transaction.html',
  styleUrl: './view-transaction.css',
})
export class ViewTransactionComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
    console.log("hitting edit button");
  }
  closeModal() {
    this.showModal = false;
  }
}
