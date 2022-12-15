import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Registro } from '../models/registro.model';
import { ModalAddService } from '../services/modal-add.service';
import { ModalEditService } from '../services/modal-edit.service';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  registros!: Registro[];
  paginador: any;
  registroSeleccionado!: Registro;

  constructor(
    private positionService: PositionService,
    private activatedRoute: ActivatedRoute,
    private modalAddService: ModalAddService,
    private modalEditService: ModalEditService
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
      })
    });

    this.modalEditService.notificarUpload.subscribe(result => {
      this.registros = this.registros?.map(reg => {
        if (reg.id == result.id) {
          reg = result;
        }
        return reg;
      })
    });
  }

  abrirModal() {
    this.modalAddService.abrirModal();
  }

  abrirModalEdit(registro: Registro) {
    this.modalEditService.abrirModal();
    this.registroSeleccionado = registro;
  }

  delete(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.registros = this.registros?.filter(reg => reg.id !== id);
        this.positionService.delete(id).subscribe((response: any) => {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            response.mensaje,
            'success'
          )
        });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          '',
          'error'
        )
      }
    })
  }



}
