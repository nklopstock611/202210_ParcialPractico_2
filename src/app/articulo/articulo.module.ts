import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloListComponent } from './articulo-list/articulo-list.component';
import { ArticuloDetailComponent } from './articulo-detail/articulo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ArticuloListComponent, ArticuloDetailComponent],
  declarations: [ArticuloListComponent, ArticuloDetailComponent]
})
export class ArticuloModule { }
