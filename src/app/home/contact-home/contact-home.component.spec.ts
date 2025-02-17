import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHomeComponent } from './contact-home.component';

describe('ContactHomeComponent', () => {
  let component: ContactHomeComponent;
  let fixture: ComponentFixture<ContactHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
