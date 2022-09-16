export interface Customer {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt?: any;
    address: Address;
    notes?: string;
}

interface Address {
    state?: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  }