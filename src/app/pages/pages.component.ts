import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registro } from '../models/registro.model';
import { ModalAddService } from '../services/modal-add.service';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  registros?: Registro[];
  paginador: any;

  constructor(
    private positionService: PositionService,
    private activatedRoute: ActivatedRoute,
    private modalAddService: ModalAddService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let valor = params.get('page');
      let page: number = valor == null ? 0 : parseInt(valor);

      if (!page) {
        page = 0;
      }

      this.positionService.getRegistros(page).subscribe(response => {
        this.registros = response.content as Registro[];
        this.paginador = response;
        console.log(this.registros)
        console.log(this.paginador)
      })
    });
  }

  abrirModal() {
    this.modalAddService.abrirModal();
  }

  delete(id: number) {
    this.positionService.delete(id).subscribe(response => console.log(response));
  }



}
