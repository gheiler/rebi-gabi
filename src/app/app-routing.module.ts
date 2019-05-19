import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainTemplateComponent } from './components/main-template/main-template.component';
import { RegistryComponent } from './components/registry/registry.component';
import { WeddingComponent } from './components/wedding/wedding.component';

const routes: Routes = [
  {
    path: ':language/:standesamt', component: MainTemplateComponent, children:
    [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent, data: { name: 'home'} },
      { path: 'hochzeit-details', component: WeddingComponent, data: { name: 'wedding'} },
      { path: 'standesamt-details', component: RegistryComponent, data: { name: 'registry'}  }
    ]
  },
  { path: ':language', redirectTo: ':language/', pathMatch: 'full' },
  { path: '', redirectTo: 'bw/', pathMatch: 'full' },
  { path: '**', redirectTo: 'bw/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {  paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
