import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../../../interfaces/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent implements OnInit {
  createdAt: any;
  customer: Customer | void = undefined;
  dataReceived: boolean = false;

  constructor(private AR: ActivatedRoute, private CS: CustomerService) {}

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getCustomer(id!, (customer: Customer) => {
        this.customer = customer;
        this.createdAt = new Date(customer.createdAt?.seconds * 1000);
        this.dataReceived = true;
      });
    });
  }
  
}
