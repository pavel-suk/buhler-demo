import { Routes } from '@angular/router';
import { MODULES } from '@config/configuration';

export const routes: Routes = [
    {
        path: MODULES.DEFAULT,
        loadComponent: () => import('@layouts/default/default.component'),
        loadChildren: () => import('@pages/pages.routes')
    }
];
