import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProgressViewComponent } from './user-progress-view.component';

describe('UserProgressViewComponent', () => {
  let component: UserProgressViewComponent;
  let fixture: ComponentFixture<UserProgressViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProgressViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProgressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
