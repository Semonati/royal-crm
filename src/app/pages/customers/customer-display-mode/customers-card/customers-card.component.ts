import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'customers-card',
  templateUrl: './customers-card.component.html',
  styles: [
  ]
})
export class CustomersCardComponent {
@Input() customers: Array<Customer> = [];
}
