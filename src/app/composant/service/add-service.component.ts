import { Service } from '../../model/service.model';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add-service.component.html',
})
export class AddServiceComponent {

  service: Service = new Service();

  constructor(private router: Router, private serviceService: ServiceService) { }

  createService(): void {
    this.serviceService.createService(this.service).subscribe(
      data => {
       alert('Service créé.');
      }
    );
  }
}
