import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tmb',
  templateUrl: './tmb.component.html',
  styleUrls: ['./tmb.component.scss']
})
export class TmbComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.form = _fb.group({
      nome: _fb.control(""),
      peso: _fb.control(0),
      altura: _fb.control(0),
      idade: _fb.control(0),
      sexo: _fb.control(null)
    });
  }

  ngOnInit(): void {
  }

  get nome(): AbstractControl {
    return this.form.get("nome");
  }

  get peso(): AbstractControl {
    return this.form.get("peso");
  }

  get altura(): AbstractControl {
    return this.form.get("altura");
  }

  get idade(): AbstractControl {
    return this.form.get("idade");
  }

  get sexo(): AbstractControl {
    return this.form.get("sexo");
  }

  get tmb(): string {
    console.log(this.form.value);
    const p = this.peso ? this.peso.value : 0;
    const a = this.altura ? this.altura.value : 0;
    const i = this.idade ? this.idade.value : 0;

    let resultado = '';
    if (this.sexo.value) {
      if (this.sexo.value === 'M') {
        resultado += 66 + (13.7 * p) + (5 * a) - (6.8 * i);
      } else {
        resultado += 665 + (9.6 * p) + (1.7 * a) - (4.7 * i);
      }
    }

    return resultado;
  }

}
