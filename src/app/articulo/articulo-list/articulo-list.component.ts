import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-articulo-list',
  templateUrl: './articulo-list.component.html',
  styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

  articulos: Array<Articulo> = [];
  selectedArticulo!: Articulo;
  isSelected: boolean = false;
  precioPromedio: number = 0;

  constructor(private articuloService: ArticuloService) { }

  getArticulos(): void {
    this.articuloService.getArticulos().subscribe( articulos => {
      this.articulos = articulos;
      this.calcularPrecioPromedio(this.articulos);
    });
  }

  calcularPrecioPromedio(articulos: Array<Articulo>): void {
    let precioTotal: number = 0;
    for (let i = 0; i < articulos.length; i++) {
      precioTotal += articulos[i].price;
    }
    this.precioPromedio = precioTotal / articulos.length;
  }

  onSelected(articulo: Articulo): void {
    this.selectedArticulo = articulo;
    this.isSelected = true;
  }

  ngOnInit() {
    this.getArticulos();
  }

}
