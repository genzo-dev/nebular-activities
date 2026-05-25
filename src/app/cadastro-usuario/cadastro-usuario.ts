import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css',
})
export class CadastroUsuario {
  success = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      cpf: ['', [Validators.required, this.cpfValidator]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(8), this.senhaForteValidator]],
      confirmarSenha: ['', Validators.required],
      perfil: ['', Validators.required]
    }, {
      validators: this.senhasIguaisValidator
    });
  }

  senhaForteValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    const temMaiuscula = /[A-Z]/.test(value);
    const temNumero = /\d/.test(value);

    return (temMaiuscula && temNumero) ? null : { senhaFraca: true };
  }

  senhasIguaisValidator(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('senha')?.value;
    const confirmar = group.get('confirmarSenha')?.value;

    return senha === confirmar ? null : { senhasDiferentes: true };
  }

  cpfValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    return regex.test(value) ? null : { cpfInvalido: true };
  }

  submit() {
    if (this.form.valid) {
      this.success = true;
      console.log(this.form.value);

      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  get f() {
    return this.form.controls;
  }
}
