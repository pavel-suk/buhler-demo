import { Routes } from "@angular/router";

export const SYSTEM_PAGES: Routes = [
    // {
    //     path: 'coming-soon',
    //     title: 'Připravuje se',
    //     loadComponent: () => import('./coming-soon/coming-soon.component'),
    // },
    {
        path: 'overview',
        title: 'Overview',
        loadComponent: () => import('@pages/overview/overview.component'),
    },
    { path: '', redirectTo: 'overview', pathMatch: 'full'}

];


export default SYSTEM_PAGES;