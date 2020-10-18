import { Component, Input, OnChanges } from '@angular/core';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-preview-area',
  templateUrl: './preview-area.component.html',
  styleUrls: ['./preview-area.component.scss'],
  inputs: ['activeInvoice'],
})
export class PreviewAreaComponent implements OnChanges {
  @Input()
  activeInvoice: Invoice;
  totalInvoiceCurrency: string;
  totalInvoiceAmount: number;

  constructor() {}

  ngOnChanges(e): void {
    console.log('PreviewAreaComponent -> ngOnChanges -> e', e);
  }

  getTotalInvoiceCurrency() {
    return this.activeInvoice.items
      ?.filter((item) => !!item.currency)?.[0]
      .currency.toUpperCase();
  }

  getTotalInvoiceAmount() {
    return this.activeInvoice.items.reduce(
      (sum, currentItem) => sum + currentItem.amount,
      0
    );
  }
}
