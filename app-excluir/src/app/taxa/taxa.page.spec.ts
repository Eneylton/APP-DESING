import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxaPage } from './taxa.page';

describe('TaxaPage', () => {
  let component: TaxaPage;
  let fixture: ComponentFixture<TaxaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
