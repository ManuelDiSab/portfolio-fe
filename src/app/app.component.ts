import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./_componenti/menu/menu.component";
import { UtilityService } from './_servizi/utility.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'portfolio-fe';
    navbarHeight: number = 0

    constructor(private UT: UtilityService, private cd:ChangeDetectorRef) { }
    ngOnInit(): void {
        this.UT.height$.subscribe(x => {
            console.log('dkdkd', x)
            this.navbarHeight = x
            this.cd.detectChanges()
        })
    }

}
