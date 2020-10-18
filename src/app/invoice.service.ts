import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { invoices } from './mock/invoices';
import { Invoice, InvoiceItem } from './types/invoice';

import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoices: Observable<Invoice[]>;

  constructor() {}

  getInvoices(): Observable<Invoice[]> {
    if (!this.invoices) {
      this.invoices = of(invoices);
    }

    return this.invoices;
  }

  addItem(activeInvoice: Invoice, invoiceItem: InvoiceItem) {
    invoiceItem.id = uuid.v4();
    activeInvoice.items.push(invoiceItem);
  }

  updateItem(
    activeInvoice: Invoice,
    updateId: string,
    updatedFields: InvoiceItem
  ) {
    const itemIndex = activeInvoice.items.findIndex(
      (item) => item.id == updateId
    );
    console.log('InvoiceService -> constructor -> itemIndex', itemIndex);
    activeInvoice.items[itemIndex].description = updatedFields.description;
    activeInvoice.items[itemIndex].client = updatedFields.client;
    activeInvoice.items[itemIndex].currency = updatedFields.currency;
    activeInvoice.items[itemIndex].amount = updatedFields.amount;
  }

  removeItem(activeInvoice: Invoice, invoiceItem: InvoiceItem) {
    const itemIndex = activeInvoice.items.indexOf(invoiceItem);
    activeInvoice.items.splice(itemIndex, 1);
  }
}
