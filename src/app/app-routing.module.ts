import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact-list',
    pathMatch: 'full'
  },
  {
    path: 'contact-list',
    loadChildren: () => import('./pages/contact-list/contact-list.module').then(m => m.ContactListPageModule)
  },
  {
    path: 'contact-detail/:id',
    loadChildren: () => import('./pages/contact-detail/contact-detail.module').then(m => m.ContactDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
