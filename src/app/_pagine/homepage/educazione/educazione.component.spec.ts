import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducazioneComponent } from './educazione.component';

describe('EducazioneComponent', () => {
  let component: EducazioneComponent;
  let fixture: ComponentFixture<EducazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
