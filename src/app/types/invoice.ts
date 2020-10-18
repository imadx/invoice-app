export interface InvoiceItem {
  id: string;
  description: string;
  client: string;
  amount: number;
  currency: string;
}

export interface Entity {
  name: string;
  addressLine1: string;
  addressLine2: string;
}

export interface Invoice {
  id: string;
  billedBy: Entity;
  billedTo: Entity;
  date: Date;
  items: InvoiceItem[];
}
