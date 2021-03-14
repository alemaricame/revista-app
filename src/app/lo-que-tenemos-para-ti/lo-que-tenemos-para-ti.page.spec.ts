import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoQueTenemosParaTiPage } from './lo-que-tenemos-para-ti.page';

describe('LoQueTenemosParaTiPage', () => {
  let component: LoQueTenemosParaTiPage;
  let fixture: ComponentFixture<LoQueTenemosParaTiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoQueTenemosParaTiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoQueTenemosParaTiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
