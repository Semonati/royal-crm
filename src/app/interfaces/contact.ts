export interface Contact {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date | string;
  createdAt?: any;
  phone: string;
  age: number;
  address: Address;
}


interface Address {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip?: number;
}