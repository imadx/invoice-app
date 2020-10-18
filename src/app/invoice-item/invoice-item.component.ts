import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvoiceItem } from '../types/invoice';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss'],
  inputs: ['item'],
  outputs: ['delete', 'edit'],
})
export class InvoiceItemComponent implements OnInit {
  @Input()
  item: InvoiceItem;

  @Output()
  delete = new EventEmitter<InvoiceItem>();

  @Output()
  edit = new EventEmitter<InvoiceItem>();

  constructor() {}

  ngOnInit(): void {}

  emitDelete(item) {
    console.log('InvoiceItemComponent -> emitDelete -> item', item);
    this.delete.emit(item);
  }

  emitEdit(item) {
    this.edit.emit(item);
  }
}
