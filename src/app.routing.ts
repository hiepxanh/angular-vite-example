import { Route, provideRouter } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home.component').then(c => c.HomeComponent)
    },
    {
        path: 'about-us',
        loadComponent: (): any => import('./about-us.component').then (c => c.AboutUsComponent)
    }
];


export const appRouting = [
    provideRouter(routes)
]