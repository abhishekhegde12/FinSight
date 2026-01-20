import { Routes } from '@angular/router';
import { RegComponent } from './register/register'
import { WelcomeComponent } from './welcome/welcome';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { ViewTransactionComponent } from './view-transaction/view-transaction';
import { AddTransactionComponent } from './add-transaction/add-transaction';

export const routes: Routes = [
    { path:'', component: WelcomeComponent },
    { path: 'register', component: RegComponent },
    { path: 'login', component: LoginComponent},
    { path: 'user-dashboard', component:DashboardComponent},
    { path: 'view-transaction', component: ViewTransactionComponent },
    { path: 'add-transaction', component:AddTransactionComponent } 
];
