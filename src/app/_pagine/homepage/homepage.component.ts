import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillComponent } from './skill/skill.component';
import { ProgettiComponent } from './progetti/progetti.component';
import { EducazioneComponent } from './educazione/educazione.component';

@Component({
  selector: 'app-homepage',
  imports: [AboutMeComponent, SkillComponent, ProgettiComponent, EducazioneComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
