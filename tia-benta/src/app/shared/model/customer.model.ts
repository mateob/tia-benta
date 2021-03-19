import { CustomerConfig } from './config/customer.config';

export class CustomerModel extends CustomerConfig {
  constructor(
    public name?: string,
    public document?: string,
  ) {
    super();
  }
}
