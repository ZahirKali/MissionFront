import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
// Pour pour utiliser Material proprement 
export class MaterialModule {}
