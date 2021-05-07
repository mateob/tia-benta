import { CustomerConfig } from './config/customer.config';

export class CustomerModel extends CustomerConfig {
  constructor(
    public name?: string,
    public document?: string,
    public sex?: string,
    public birthDate?: number,
    public ddd?: number,
    public phone?: number,
    public personType?: string,
    public state?: string,
    public city?: string,
    public neighborhood?: string,
    public address?: string,
    public addressNumber?: number,
    public complement?: string,
    public postalCode?: number,
    public municipalityIbgeCode?: string,
    public email?: string
  ) {
    super();
  }
}
