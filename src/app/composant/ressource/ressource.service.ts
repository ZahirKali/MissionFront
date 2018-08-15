import { Ressource } from '../../model/ressource.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RessourceService {

  constructor(private http: HttpClient) {}

  private ressourceUrl = 'http://localhost:8080/mission/api/ressource';


  public getRessources() {
    return this.http.get<Ressource[]>(this.ressourceUrl);
  }

  public deleteRessource(ressource) {
    return this.http.delete(this.ressourceUrl + '/' + ressource.id);
  }

  public createRessource(ressource) {
    return this.http.post<Ressource>(this.ressourceUrl, ressource);
  }
}
