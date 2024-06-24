import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersClassComponent } from './users-class.component';

describe('UsersClassComponent', () => {
  let component: UsersClassComponent;
  let fixture: ComponentFixture<UsersClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
