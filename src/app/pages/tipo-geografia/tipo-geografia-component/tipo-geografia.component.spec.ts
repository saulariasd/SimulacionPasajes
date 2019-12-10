import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoGeografiaComponent } from './tipo-geografia.component';

describe('TipoGeografiaComponent', () => {
  let component: TipoGeografiaComponent;
  let fixture: ComponentFixture<TipoGeografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoGeografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoGeografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
