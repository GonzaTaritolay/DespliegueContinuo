import { Routes } from '@angular/router';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { TraductorComponent } from './components/traductor/traductor.component';


export const routes: Routes = [
    { path: 'page-a', component: PageAComponent },
    { path: 'page-b', component: PageBComponent },
    { path: 'page-c', component: PageCComponent },
    { path:'traductor', component: TraductorComponent },
    
    { path: '**', redirectTo: 'page-a', pathMatch: 'full' }
    
];
 