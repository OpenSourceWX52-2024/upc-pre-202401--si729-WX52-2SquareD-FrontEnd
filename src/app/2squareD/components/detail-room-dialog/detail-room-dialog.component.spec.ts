import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRoomDialogComponent } from './detail-room-dialog.component';

describe('DetailRoomDialogComponent', () => {
  let component: DetailRoomDialogComponent;
  let fixture: ComponentFixture<DetailRoomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRoomDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailRoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
