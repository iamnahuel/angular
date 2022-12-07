import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-agregar-socios',
  templateUrl: './agregar-socios.component.html',
  styleUrls: ['./agregar-socios.component.css']
})
export class AgregarSociosComponent implements OnInit {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ])
  lastNameControl = new FormControl('', [Validators.required])
  dniControl = new FormControl('', [Validators.required])
  tiposocioControl = new FormControl('', [Validators.required])
  celControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)])
  emailControl = new FormControl('', [Validators.email, Validators.required])
  streetNameControl = new FormControl('', [Validators.required])
  countryControl = new FormControl('', [Validators.required])




  registerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
    tiposocio: this.tiposocioControl,
    cel: this.celControl,
    email: this.emailControl,
    location: new FormGroup({
      streetName: this.streetNameControl,
      country: this.countryControl,
    }),
  })






  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.registerForm.value)
  }

}
