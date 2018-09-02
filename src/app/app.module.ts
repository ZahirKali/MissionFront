import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RessourceComponent } from './composant/ressource/ressource.component';
import { AppRoutingModule } from './app.routing.module';
import { CalendrierGeneralComponent } from './composant/calendrier-general/calendrier-general.component';
import { DemoUtilsModule } from './composant/calendrier-utils/module';
import { MaterialModule } from './composant/material/material.module';
import { RessourceService } from './composant/ressource/ressource.service';
import { AddServiceComponent } from './composant/service/add-service.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './composant/service/service.component';
import { ServiceService } from './composant/service/service.service';
import { TestComponent } from './composant/test/test.component';
import { MissionCouranteFilter } from './pipe/mission-courante-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    RessourceComponent,
    ServiceComponent,
    AddServiceComponent,
    CalendrierGeneralComponent,
    MissionCouranteFilter,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    DemoUtilsModule,
    MaterialModule
  ],
  providers: [RessourceService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
