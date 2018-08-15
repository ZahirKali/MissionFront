import { Service } from '../../model/service.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) {}

  private serviceUrl = 'http://localhost:8080/mission/api/service';

  public getServices() {
    return this.http.get<Service[]>(this.serviceUrl);
  }

  public deleteService(service) {
    return this.http.delete(this.serviceUrl + '/' + service.id);
  }

  public createService(service) {
    return this.http.post<Service>(this.serviceUrl, service);
  }

}
