import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroUsuario } from './cadastro-usuario/cadastro-usuario';
import { ExperienciaComponent } from './experiencia-component/experiencia-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroUsuario, ExperienciaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-activities');
}
