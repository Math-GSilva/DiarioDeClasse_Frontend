import { Routes } from '@angular/router';
import { authGuard } from './services/auth/auth.guard';
import { userGuard } from './services/auth/user.guard';

export const routes: Routes = [
    {'path': 'login', 
    loadChildren: () => import('./modules/login-page/login-page.module').then(m => m.LoginPageModule),
    canActivate: [userGuard]},
    {'path': 'test', 
    loadChildren: () => import('./modules/test-page/test-page.module').then(m => m.TestPageModule),
    canActivate: [authGuard]},
    {'path': 'home', 
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)},
    {'path': 'teachers', 
    loadChildren: () => import('./modules/teachers-page/teachers-page.module').then(m => m.TeachersPageModule)},
    {'path': 'classes', 
    loadChildren: () => import('./modules/classes-page/classes-page.module').then(m => m.ClassesPageModule)},
    {'path': 'students', 
    loadChildren: () => import('./modules/students-page/students-page.module').then(m => m.StudentsPageModule)},
    {'path': '', redirectTo: 'login', pathMatch: 'full'},
];
