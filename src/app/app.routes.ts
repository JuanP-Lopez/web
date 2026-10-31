import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { SignUp } from './signup/signup';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [

    {
        path: '',
        component: Landing,
        title: 'Karina'
    },
    {
        path: 'signup',
        component: SignUp,
        title: 'Sign Up'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login'
    },
    {
        path: 'dashboard',
        component: Dashboard,
        title: 'Dashboard'
    }

];
