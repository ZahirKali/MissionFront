import { CalendrierGeneralComponent } from './composant/calendrier-general/calendrier-general.component';
import { RessourceComponent } from './composant/ressource/ressource.component';
import { AddServiceComponent } from './composant/service/add-service.component';
import { ServiceComponent } from './composant/service/service.component';
import { TestComponent } from './composant/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'ressource', component: RessourceComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'add-service', component: AddServiceComponent},
  {path: 'calendrier-general', component: CalendrierGeneralComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
