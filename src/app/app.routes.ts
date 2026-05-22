import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ClientPanelComponent } from './pages/client-panel/client-panel.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogComponent },
  { path: 'minha-conta', component: ClientPanelComponent },
  { path: 'acompanhamento', component: OrderTrackingComponent },
  { path: 'quem-somos', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
