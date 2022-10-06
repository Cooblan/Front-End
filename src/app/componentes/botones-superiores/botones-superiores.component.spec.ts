import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesSuperioresComponent } from './botones-superiores.component';

describe('BotonesSuperioresComponent', () => {
  let component: BotonesSuperioresComponent;
  let fixture: ComponentFixture<BotonesSuperioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesSuperioresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesSuperioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
