import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathGamePokemonComponent } from './math-game-pokemon.component';

describe('MathGamePokemonComponent', () => {
  let component: MathGamePokemonComponent;
  let fixture: ComponentFixture<MathGamePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathGamePokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathGamePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
