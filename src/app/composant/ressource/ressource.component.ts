import {RessourceService} from './ressource.service';
import {Ressource} from '../../model/ressource.model';
import {Router} from '@angular/router';
import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {

  // Pour lister les ressources
  mesColonnes = ['code', 'nom', 'prenom'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  // Pour creer une ressource
  ressource: Ressource = new Ressource();
  

  constructor(private router: Router, private ressourceService: RessourceService) {}

  // Initialisation
  ngOnInit() {
    this.ressourceService.getRessources().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      });
    this.dataSource.sort = this.sort;
  }

  // Supprimer Ressource
  deleteRessource(res: Ressource): void {
    this.ressourceService.deleteRessource(res);
    this.ngOnInit();
  }

  // Creer Ressource
  createRessource(): void {
    this.ressourceService
      .createRessource(this.ressource)
      .subscribe(data => {
        alert('Ressource créée!');
      });
  }
}