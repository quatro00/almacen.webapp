import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionFormComponent } from './organizacion-form.component';

describe('OrganizacionFormComponent', () => {
  let component: OrganizacionFormComponent;
  let fixture: ComponentFixture<OrganizacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizacionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
