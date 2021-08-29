import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremioALaExcelenciaPage } from './premio-a-la-excelencia.page';

describe('PremioALaExcelenciaPage', () => {
  let component: PremioALaExcelenciaPage;
  let fixture: ComponentFixture<PremioALaExcelenciaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PremioALaExcelenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremioALaExcelenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
