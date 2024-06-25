import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRoomsViewComponent } from './game-rooms-view.component';

describe('GameRoomsViewComponent', () => {
  let component: GameRoomsViewComponent;
  let fixture: ComponentFixture<GameRoomsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameRoomsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameRoomsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
