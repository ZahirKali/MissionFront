import { CalendrierGeneralComponent } from './composant/calendrier-general/calendrier-general.component';
import { AddRessourceComponent } from './composant/ressource/add-ressource.component';
import { RessourceComponent } from './composant/ressource/ressource.component';
import { AddServiceComponent } from './composant/service/add-service.component';
import { ServiceComponent } from './composant/service/service.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'ressource', component: RessourceComponent},
  {path: 'add-ressource', component: AddRessourceComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'add-service', component: AddServiceComponent},
  {path: 'calendrier-general', component: CalendrierGeneralComponent}
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
