import { Service } from '../../model/service.model';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services: Service[];

  constructor(private router: Router, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService
      .getServices()
      .subscribe(data => {
        this.services = data;
      });
  }

  deleteService(service: Service) {
    this.serviceService
      .deleteService(service)
      .subscribe(data => {
        this.services = this.services.filter( s => s !== service);
      });
  }
}
