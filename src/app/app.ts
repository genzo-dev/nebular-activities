import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroUsuario } from './cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-activities');
}
