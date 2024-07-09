import { Routes } from '@angular/router';

import { IndexComponent } from './product/index/index.component';
import { ViewComponent } from './product/view/view.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: IndexComponent },
  { path: 'product/:productId/view', component: ViewComponent },
  { path: 'product/create', component: CreateComponent },
  { path: 'product/:productId/edit', component: EditComponent },
];
