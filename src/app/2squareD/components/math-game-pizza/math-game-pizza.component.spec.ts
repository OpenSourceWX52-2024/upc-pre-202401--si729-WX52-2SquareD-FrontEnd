import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathGamePizzaComponent } from './math-game-pizza.component';

describe('MathGamePizzaComponent', () => {
  let component: MathGamePizzaComponent;
  let fixture: ComponentFixture<MathGamePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathGamePizzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathGamePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
