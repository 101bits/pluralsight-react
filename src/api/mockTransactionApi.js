import delay from './delay';


const transactions = [{
  "id": "6e492717-ed5c-4c66-8a63-0dd9f1ccc927",
  "name": "Samosa",
  "amount": 5,
  "debit": "true",
  "transactionDate": "2015-01-10T14:22:31",
  "category": {"name": "Snacks", "groupName": "Food & Drink"}
}, {
  "id": "0820823a-1ba2-41ca-b673-1995c6008b2b",
  "name": "chevron",
  "amount": 16,
  "debit": "true",
  "transactionDate": "2015-01-08T21:28:56",
  "category": {"name": "Gas", "groupName": "Transportation"}
}, {
  "id": "bf350076-8d34-4650-be1a-1553e02e6c50",
  "name": "yahoo",
  "amount": 100,
  "debit": "true",
  "transactionDate": "2015-01-07T15:36:03",
  "category": {"name": "Travel", "groupName": "Business"}
}, {
  "id": "29a2fda7-65cd-446b-ac73-186375414781",
  "name": "notary passport",
  "amount": 10,
  "debit": "true",
  "transactionDate": "2015-01-06T17:16:54",
  "category": {"name": "Other Shopping", "groupName": "Uncategorized"}
}, {
  "id": "67248869-22b5-44de-b648-eb2a3bcb58f3",
  "name": "white elephant",
  "amount": 22,
  "debit": "true",
  "transactionDate": "2015-01-02T06:33:07",
  "category": {"name": "Restaurants", "groupName": "Food & Drink"}
}, {
  "id": "7143aa85-ad92-4d6c-ae02-641d71791e9c",
  "name": "dollar tree",
  "amount": 1.09,
  "debit": "true",
  "transactionDate": "2015-01-02T06:25:22",
  "category": {"name": "Hair", "groupName": "Personal"}
}, {
  "id": "da5c4e8d-fcc4-4bbf-b705-cf94edf79d2b",
  "name": "India bazaar",
  "amount": 15.99,
  "debit": "true",
  "transactionDate": "2015-01-02T05:58:57",
  "category": {"name": "Groceries", "groupName": "Food & Drink"}
}, {
  "id": "d34654c6-1fe4-41b8-a93d-bf7d969dc97e",
  "name": "rent",
  "amount": 1818,
  "debit": "true",
  "transactionDate": "2015-01-01T12:11:43",
  "category": {"name": "Rent", "groupName": "Home"}
}];


class TransactionsApi {
  static getAllTransactions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], transactions));
      }, delay);
    });
  }
}

export default TransactionsApi;
