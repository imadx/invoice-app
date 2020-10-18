import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInvoiceItemsComponent } from './sidebar-invoice-items.component';

describe('SidebarInvoiceItemsComponent', () => {
  let component: SidebarInvoiceItemsComponent;
  let fixture: ComponentFixture<SidebarInvoiceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarInvoiceItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInvoiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
