import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-sidebar-invoices',
  templateUrl: './sidebar-invoices.component.html',
  styleUrls: ['./sidebar-invoices.component.scss'],
  inputs: ['invoices'],
  outputs: ['activeInvoiceUpdated'],
})
export class SidebarInvoicesComponent implements OnInit {
  @Input()
  invoices: [];

  @Output()
  activeInvoiceUpdated = new EventEmitter<Invoice>();

  activeInvoice: Invoice;

  constructor() {}

  ngOnInit() {}

  emitActiveInvoice(invoice: Invoice) {
    this.activeInvoiceUpdated.emit(invoice);
    this.activeInvoice = invoice;
  }
}
