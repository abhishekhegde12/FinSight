import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  // small reactive-ish signals (you can replace with real data & services)
  protected readonly userName = signal('Abhishek');
  protected readonly lastUpdated = signal('Today, 8:22 PM');

  protected readonly kpis = signal({
    totalBalance: 75200,
    monthlySpend: 42500,
    totalCredits: 55700
  });

  protected readonly recentTransactions = signal([
    { date: '12 Jan', vendor: 'Swiggy', amount: -450, app: 'GPay', note: '' },
    { date: '11 Jan', vendor: 'Salary', amount: 35000, app: 'Bank', note: '' },
    { date: '10 Jan', vendor: 'Movie Palace', amount: -1250, app: 'Entertainment', note: '' },
    { date: '10 Jan', vendor: 'Uber', amount: -750, app: 'Paytm', note: '' },
    { date: '03 Jan', vendor: 'Supermart', amount: -2300, app: 'SBI', note: '' }
  ]);

  // spending by category (for pie / legend)
  protected readonly spendingByCategory = signal([
    { name: 'Food', value: 42 },
    { name: 'Travel', value: 28 },
    { name: 'Shopping', value: 18 },
    { name: 'Bills', value: 12 }
  ]);

  // quick tiles (navigation cards)
  protected readonly tiles = signal([
    { title: 'All Transactions', icon: '📋', route: '/transactions' },
    { title: 'Add Notes', icon: '📝', route: '/notes' },
    { title: 'Export Data', icon: '📤', route: '/export' },
    { title: 'Manage Alerts', icon: '🔔', route: '/alerts' },
    { title: 'Add Bank Account', icon: '🏦', route: '/accounts/link' },
    { title: 'Insights', icon: '💡', route: '/insights' },
  ]);

  // small helper for display
  formatAmount(n: number) {
    const abs = Math.abs(n).toLocaleString('en-IN');
    return (n < 0 ? '−' : '+') + '₹' + abs;
  }
}
