import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansViewComponent } from './plans-view.component';

describe('PlansViewComponent', () => {
  let component: PlansViewComponent;
  let fixture: ComponentFixture<PlansViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlansViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
