import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AboutPageComponent,
  HomePageComponent,
  ContactPageComponent,
} from './shared';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountryModule),
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
