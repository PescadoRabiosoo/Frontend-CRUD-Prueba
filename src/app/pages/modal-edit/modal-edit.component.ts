import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Registro } from 'src/app/models/registro.model';
import { ModalEditService } from 'src/app/services/modal-edit.service';
import { PositionService } from 'src/app/services/position.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit, OnChanges {

  @Input() registro!: Registro;
  titulo: string = 'Editar Registro'

  solucion: Registro = new Registro();

  editForm!: FormGroup;

  constructor(
    public modalEditService: ModalEditService,
    private formBuilder: FormBuilder,
    private positionService: PositionService
  ) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildForm();
  }

  public buildForm() {
    this.editForm = this.formBuilder.group({
      id: [this.registro.id | this.solucion.id],
      year: [this.registro.year, [Validators.required]],
      amount: [this.registro.amount, [Validators.required]],
      state: [this.registro.state, [Validators.required]],
      category: [this.registro.category, [Validators.required]],
      item: [this.registro.item, [Validators.required]],
      percent: [this.registro.percent, [Validators.required]],
    })
  }

  edit($event: Event) {
    event?.preventDefault();
    if (this.editForm?.valid) {
      const value = this.editForm?.value as Registro;
      this.positionService.update(value).subscribe((mensaje: any) => {
        this.modalEditService.notificarUpload.emit(mensaje.position);
        Swal.fire('Registro Actualizado', mensaje.mensaje, 'success');
        this.cerrarModal();
      });
    } else {
      this.editForm?.markAllAsTouched();
    }
  }

  get yearField() {
    return this.editForm.get('year');
  }
  get yearFieldIsValid() {
    return (this.yearField?.touched || this.yearField?.dirty) && this.yearField.valid;
  }
  get yearFieldIsInvalid() {
    return (this.yearField?.touched || this.yearField?.dirty) && this.yearField.invalid;
  }
  get amountField() {
    return this.editForm.get('amount');
  }
  get amountFieldIsValid() {
    return (this.amountField?.touched || this.amountField?.dirty) && this.amountField.valid;
  }
  get amountFieldIsInvalid() {
    return (this.amountField?.touched || this.amountField?.dirty) && this.amountField.invalid;
  }
  get stateField() {
    return this.editForm.get('state');
  }
  get stateFieldIsValid() {
    return (this.stateField?.touched || this.stateField?.dirty) && this.stateField.valid;
  }
  get stateFieldIsInvalid() {
    return (this.stateField?.touched || this.stateField?.dirty) && this.stateField.invalid;
  }
  get categoryField() {
    return this.editForm.get('category');
  }
  get categoryFieldIsValid() {
    return (this.categoryField?.touched || this.categoryField?.dirty) && this.categoryField.valid;
  }
  get categoryFieldIsInvalid() {
    return (this.categoryField?.touched || this.categoryField?.dirty) && this.categoryField.invalid;
  }
  get itemField() {
    return this.editForm.get('item');
  }
  get itemFieldIsValid() {
    return (this.itemField?.touched || this.itemField?.dirty) && this.itemField.valid;
  }
  get itemFieldIsInvalid() {
    return (this.itemField?.touched || this.itemField?.dirty) && this.itemField.invalid;
  }
  get percentField() {
    return this.editForm.get('percent');
  }
  get percentFieldIsValid() {
    return (this.percentField?.touched || this.percentField?.dirty) && this.percentField.valid;
  }
  get percentFieldIsInvalid() {
    return (this.percentField?.touched || this.percentField?.dirty) && this.percentField.invalid;
  }

  cerrarModal() {
    this.modalEditService.cerrarModal();
  }

}
