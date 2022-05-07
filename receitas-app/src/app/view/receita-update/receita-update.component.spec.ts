import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaUpdateComponent } from './receita-update.component';

describe('ReceitaUpdateComponent', () => {
  let component: ReceitaUpdateComponent;
  let fixture: ComponentFixture<ReceitaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
