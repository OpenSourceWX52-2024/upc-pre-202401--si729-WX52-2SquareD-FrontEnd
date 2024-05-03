import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignInComponent } from './users-sign-in.component';

describe('UsersSignInComponent', () => {
  let component: UsersSignInComponent;
  let fixture: ComponentFixture<UsersSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
