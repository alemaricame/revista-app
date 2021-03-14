import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuroDelDesarrolloPage } from './muro-del-desarrollo.page';

describe('MuroDelDesarrolloPage', () => {
  let component: MuroDelDesarrolloPage;
  let fixture: ComponentFixture<MuroDelDesarrolloPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MuroDelDesarrolloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuroDelDesarrolloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
