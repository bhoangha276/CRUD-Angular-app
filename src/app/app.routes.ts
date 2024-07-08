import { Routes } from '@angular/router';

import { IndexComponent } from './product/index/index.component';
import { ViewComponent } from './product/view/view.component';

export const routes: Routes = [
  { path: 'product', redirectTo: 'product/index', pathMatch: 'full' },
  { path: 'product/index', component: IndexComponent },
  { path: 'product/:productId/view', component: ViewComponent },
];
