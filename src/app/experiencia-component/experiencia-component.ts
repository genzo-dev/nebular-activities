import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './experiencia-component.html',
  styleUrl: './experiencia-component.css',
})
export class ExperienciaComponent {
  success = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      empresa: ['', Validators.required],
      experiencias: this.fb.array([])
    });
  }

  get experiencias(): FormArray {
    return this.form.get('experiencias') as FormArray;
  }

  criarExperiencia(): FormGroup {
    return this.fb.group({
      empresa: ['', Validators.required],
      cargo: ['', Validators.required],
      anoInicio: ['', [Validators.required, Validators.min(1990)]],
      anoFim: ['']
    });
  }

  adicionarExperiencia() {
    this.experiencias.push(this.criarExperiencia());
  }

  removerExperiencia(index: number) {
    this.experiencias.removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      this.success = true;
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
