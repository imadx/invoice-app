import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { Invoice, InvoiceItem } from '../types/invoice';

@Component({
  selector: 'app-sidebar-invoice-items',
  templateUrl: './sidebar-invoice-items.component.html',
  styleUrls: ['./sidebar-invoice-items.component.scss'],
  inputs: ['activeInvoice'],
})
export class SidebarInvoiceItemsComponent implements OnInit {
  @Input()
  activeInvoice: Invoice;
  editingItem: InvoiceItem;

  newInvoiceFormGroup: FormGroup;

  constructor(private invoiceService: InvoiceService) {
    this.initFormGroup();
  }

  initFormGroup() {
    this.newInvoiceFormGroup = new FormGroup({
      description: new FormControl(this.editingItem?.description || '', [
        Validators.required,
        regexValidator(/[A-z]/),
      ]),
      client: new FormControl(this.editingItem?.client, [
        Validators.required,
        regexValidator(/[A-z]/),
      ]),
      currency: new FormControl(this.editingItem?.currency, [
        Validators.required,
        regexValidator(/^[A-z]+$/),
      ]),
      amount: new FormControl(this.editingItem?.amount, [
        Validators.required,
        regexValidator(/^(-)?[\d\.]+$/),
      ]),
    });
  }

  ngOnInit(): void {}

  submitNewItem(newInvoiceFormGroup) {
    if (newInvoiceFormGroup.status === 'INVALID') {
      return;
    }

    const newItemData = newInvoiceFormGroup.value;
    console.log(
      'SidebarInvoiceItemsComponent -> submitNewItem -> newItemData',
      newItemData
    );

    if (this.editingItem) {
      this.invoiceService.updateItem(
        this.activeInvoice,
        this.editingItem.id,
        newItemData
      );
      this.editingItem = null;
    } else {
      this.invoiceService.addItem(this.activeInvoice, newItemData);
    }
    this.newInvoiceFormGroup.reset();
  }

  resetItems(): void {
    this.editingItem = null;
    this.newInvoiceFormGroup.reset();
  }

  removeItem(item) {
    console.log('SidebarInvoiceItemsComponent -> removeItem -> item', item);

    this.invoiceService.removeItem(this.activeInvoice, item);
  }

  editItem(item) {
    console.log('SidebarInvoiceItemsComponent -> editItem -> item', item);
    this.editingItem = item;
    this.initFormGroup();
  }

  printInvoice() {
    print();
  }
}

function regexValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = nameRe.test(control.value);
    return isValid ? null : { forbiddenName: { value: control.value } };
  };
}
