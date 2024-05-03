import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathGamesViewComponent } from './math-games-view.component';

describe('MathGamesViewComponent', () => {
  let component: MathGamesViewComponent;
  let fixture: ComponentFixture<MathGamesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathGamesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathGamesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
