import { RessourceService } from './ressource.service';
import { Ressource } from '../../model/ressource.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.css']
})
export class AddRessourceComponent {

  ressource: Ressource = new Ressource();

  constructor(private router: Router, private ressourceService: RessourceService) {}

  createRessource(): void {
    this.ressourceService
      .createRessource(this.ressource)
      .subscribe(data => {
        alert('Ressource créée!');
      });
  }

}
