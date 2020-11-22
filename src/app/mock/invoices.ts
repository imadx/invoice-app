import { Invoice } from '../types/invoice';

export const invoices: Invoice[] = [
  {
    id: 'sample-2',
    date: new Date(),
    billedBy: {
      name: 'Ishan Madhusanka',
      addressLine1: 'Happy place,',
      addressLine2: 'Nuwara Eliya',
    },
    billedTo: {
      name: 'Rhino Partners Pte. Ltd.',
      addressLine1: '9 Makeway Avenue,',
      addressLine2: 'Singapore 228603',
    },
    items: [
      {
        id: 'item-1',
        description: 'Developer charges',
        client: 'Railsbank',
        amount: 9999,
        currency: 'SGD',
      },
      {
        id: 'item-2',
        description: 'L3 support charges',
        client: 'Railsbank',
        amount: 2999,
        currency: 'SGD',
      },
    ],
  },
];
