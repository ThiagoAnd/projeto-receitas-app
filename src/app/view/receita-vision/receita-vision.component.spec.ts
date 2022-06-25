import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaVisionComponent } from './receita-vision.component';

describe('ReceitaVisionComponent', () => {
  let component: ReceitaVisionComponent;
  let fixture: ComponentFixture<ReceitaVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
