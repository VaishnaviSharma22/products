import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproComponent } from './newpro.component';

describe('NewproComponent', () => {
  let component: NewproComponent;
  let fixture: ComponentFixture<NewproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
