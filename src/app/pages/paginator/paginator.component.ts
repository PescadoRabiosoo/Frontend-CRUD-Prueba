import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})

export class PaginatorComponent implements OnInit, OnChanges {

  @Input() paginador: any;
  paginas: number[] = [0];
  desde: number = 0;
  hasta: number = 0;
  inicio: number = 0;
  final: number = 0;

  constructor() { }

  ngOnInit() {
    this.initPaginator();
  }

  ngOnChanges(changes: SimpleChanges) {
    let paginadorActualizado = changes['paginador'];

    if (paginadorActualizado.previousValue) {
      this.initPaginator();
    }
  }

  private initPaginator(): void {
    console.log(this.paginador.number)
    console.log(this.paginador.totalPages)

    this.inicio = 1 + (this.paginador.number * this.paginador.size);
    this.final = 15 + (this.paginador.number * this.paginador.size);
    if (this.final > this.paginador.totalElements) {
      this.final = this.paginador.totalElements;
    }

    this.desde = Math.min(Math.max(1, this.paginador.number - 1), this.paginador.totalPages - 1);

    console.log(this.desde)

    this.hasta = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 1), 3);

    console.log(this.hasta)

    if (this.paginador.totalPages > 3) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde);

      console.log(new Array(this.hasta - this.desde + 1).fill(0))
      console.log(this.paginas)

    } else {

      this.paginas = new Array(this.paginador.totalPages).fill(0).map((_valor, indice) => indice + 1);

      console.log(new Array(this.hasta - this.desde + 1).fill(0))
      console.log(this.paginas)

    }
  }

}
