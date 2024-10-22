import { Routes } from '@angular/router';
import { authGuard } from './services/auth/auth.guard';

export const routes: Routes = [
    {'path': '', 
    loadChildren: () => import('./modules/login-page/login-page.module').then(m => m.LoginPageModule)},
    {'path': 'test', 
    loadChildren: () => import('./modules/test-page/test-page.module').then(m => m.TestPageModule),
    canActivate: [authGuard]},
];
