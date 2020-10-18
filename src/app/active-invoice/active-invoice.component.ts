import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-active-invoice',
  templateUrl: './active-invoice.component.html',
  styleUrls: ['./active-invoice.component.scss'],
  inputs: ['activeInvoice'],
})
export class ActiveInvoiceComponent implements OnInit {
  @Input()
  activeInvoice: Invoice;

  constructor() {}

  ngOnInit(): void {}

  emitUpdated() {
    console.log('ActiveInvoiceComponent -> emitUpdated -> emitUpdated');
  }
}
