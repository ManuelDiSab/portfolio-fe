import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillComponent } from './skill/skill.component';
import { ProgettiComponent } from './progetti/progetti.component';
import { EducazioneComponent } from './educazione/educazione.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-homepage',
    imports: [AboutMeComponent, SkillComponent, ProgettiComponent, EducazioneComponent],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
    constructor(private route:ActivatedRoute, private router:Router){}

    ngOnInit(): void {
        this.route.fragment.subscribe( fr => {
            if(fr){
                const element = document.getElementById(fr)
                if(element){
                    element.scrollIntoView({behavior:'smooth'})
                }
            }
        })
    }
}
