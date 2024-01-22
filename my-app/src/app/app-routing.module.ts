import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules, provideRouter, withPreloading, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
];

@NgModule({
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
