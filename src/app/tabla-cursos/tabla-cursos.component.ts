import { Component } from '@angular/core';
import { Curso } from '../model/curso.model';
import { cursos } from './mock';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent {

  public cursos?: Curso[]

  ngOnInit(): void {
    this.cursos = cursos
  }
}
