import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Registro } from 'src/app/models/registro.model';
import { ModalAddService } from 'src/app/services/modal-add.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  titulo: string = 'Agregar Nuevo Registro'

  crearForm!: FormGroup;

  constructor(
    public modalAddService: ModalAddService,
    private formBuilder: FormBuilder,
    private positionService: PositionService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    console.log("Hola")
  }

  public buildForm() {
    this.crearForm = this.formBuilder.group({
      year: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      state: ['', [Validators.required]],
      category: ['', [Validators.required]],
      item: ['', [Validators.required]],
      percent: ['', [Validators.required]],
    })
  }

  save($event: any) {
    event?.preventDefault();
    if (this.crearForm?.valid) {
      const value = this.crearForm?.value as Registro;
      console.log(value);
      this.positionService.create(value).subscribe(resp => console.log(resp));
    } else {
      this.crearForm?.markAllAsTouched();
    }
  }

  get yearField() {
    return this.crearForm.get('year');
  }
  get yearFieldIsValid() {
    return (this.yearField?.touched || this.yearField?.dirty) && this.yearField.valid;
  }
  get yearFieldIsInvalid() {
    return (this.yearField?.touched || this.yearField?.dirty) && this.yearField.invalid;
  }
  get amountField() {
    return this.crearForm.get('amount');
  }
  get amountFieldIsValid() {
    return (this.amountField?.touched || this.amountField?.dirty) && this.amountField.valid;
  }
  get amountFieldIsInvalid() {
    return (this.amountField?.touched || this.amountField?.dirty) && this.amountField.invalid;
  }
  get stateField() {
    return this.crearForm.get('state');
  }
  get stateFieldIsValid() {
    return (this.stateField?.touched || this.stateField?.dirty) && this.stateField.valid;
  }
  get stateFieldIsInvalid() {
    return (this.stateField?.touched || this.stateField?.dirty) && this.stateField.invalid;
  }
  get categoryField() {
    return this.crearForm.get('category');
  }
  get categoryFieldIsValid() {
    return (this.categoryField?.touched || this.categoryField?.dirty) && this.categoryField.valid;
  }
  get categoryFieldIsInvalid() {
    return (this.categoryField?.touched || this.categoryField?.dirty) && this.categoryField.invalid;
  }
  get itemField() {
    return this.crearForm.get('item');
  }
  get itemFieldIsValid() {
    return (this.itemField?.touched || this.itemField?.dirty) && this.itemField.valid;
  }
  get itemFieldIsInvalid() {
    return (this.itemField?.touched || this.itemField?.dirty) && this.itemField.invalid;
  }
  get percentField() {
    return this.crearForm.get('percent');
  }
  get percentFieldIsValid() {
    return (this.percentField?.touched || this.percentField?.dirty) && this.percentField.valid;
  }
  get percentFieldIsInvalid() {
    return (this.percentField?.touched || this.percentField?.dirty) && this.percentField.invalid;
  }

  cerrarModal() {
    this.modalAddService.cerrarModal();
  }

}
