import { RessourceService } from './ressource.service';
import { Ressource } from '../../model/ressource.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {

  ressources: Ressource[];

   constructor(private router: Router, private ressourceService: RessourceService) {}

  ngOnInit() {
    this.ressourceService
      .getRessources()
      .subscribe( data => {
        this.ressources = data;
      });
  }


  deleteRessource(res: Ressource): void {
    this.ressourceService.deleteRessource(res)
      .subscribe( data => {
        this.ressources = this.ressources.filter(r => r !== res);
      });
  }
}
