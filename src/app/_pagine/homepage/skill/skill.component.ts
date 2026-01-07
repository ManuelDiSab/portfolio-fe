import { Component } from '@angular/core';
import { ICompetenza } from '../../../_interfacce/icomptenza';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  arr_frontend: ICompetenza[] = [
    { nome: 'Angular', img: '/icon/Angular.svg' },
    { nome: 'TypeScript', img: '/icon/ts.svg' },
    { nome: 'JavaScript', img: '/icon/js.svg' },
    { nome: 'HTML', img: '/icon/html.svg' },
    { nome: 'CSS', img: '/icon/css.svg' },
    { nome: 'Sass', img: '/icon/sass.svg' },
  ];

  arr_backend: ICompetenza[] = [
    { nome: 'Laravel', img: '/icon/laravel.svg' },
    { nome: 'PHP', img: '/icon/php.svg' },
    { nome: 'REST API', img: '/icon/api.svg' },
    { nome: 'SQL', img: '/icon/sql.svg' },
    { nome: 'Java', img: '/icon/java.svg' },
  ];

  arr_tool: ICompetenza[] = [
    { nome: 'GitHub', img: '/icon/github.svg' },
    { nome: 'Git', img: '/icon/git.svg' },
    { nome: 'VS Code', img: '/icon/vs.svg' },
    { nome: 'Postman', img: '/icon/postman.svg' },
    { nome: 'MySql', img: '/icon/mysql.svg' },
  ];

  arr_next: ICompetenza[] = [
    { nome: 'Spring', img: '/icon/spring.svg' },
    { nome: 'Maven', img: '/icon/maven.svg' },
    { nome: 'Docker', img: '/icon/docker.svg' },
  ];
  soft_skill: string[] = [
    'Conoscenza della lingua inglese',
    'Problem solveing',
    'attenzione ai dettagli',
  ];
}
