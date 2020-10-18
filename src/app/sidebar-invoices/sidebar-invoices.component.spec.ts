import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInvoicesComponent } from './sidebar-invoices.component';

describe('SidebarInvoicesComponent', () => {
  let component: SidebarInvoicesComponent;
  let fixture: ComponentFixture<SidebarInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
