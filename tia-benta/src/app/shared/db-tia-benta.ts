import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CustomerModel } from './model/customer.model';
import { ItemModel } from './model/item.model';

export class DBTiaBenta implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const customer: CustomerModel[] = [
      { id: '1234', name: 'Teste 1', document: '1234' } as CustomerModel,
      { id: '9123', name: 'Teste 2', document: '9123' } as CustomerModel,
      { id: '8123', name: 'Teste 3', document: '8123' } as CustomerModel,
      { id: '7123', name: 'Teste 4', document: '7123' } as CustomerModel,
      { id: '6123', name: 'Teste 5', document: '6123' } as CustomerModel,
    ]

    const fruits: ItemModel[] = [
      { id: '1234', name: 'Maçã', detail: 'Maçã madura', quantity: 10, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '9123', name: 'Banana', detail: 'Banana madura', quantity: 8, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '8123', name: 'Laranja', detail: 'Laranja madura', quantity: 10, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '7123', name: 'Bergamota', detail: 'Bergamota madura', quantity: 5, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '6123', name: 'Melancia', detail: 'Melancia madura', quantity: 2, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '5123', name: 'Melão', detail: 'Melão maduro', quantity: 6, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '4123', name: 'Mamão', detail: 'Mamão maduro', quantity: 7, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '3123', name: 'Abacate', detail: 'Abacate maduro', quantity: 2, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '2123', name: 'Ameixa', detail: 'Ameixa madura', quantity: 9, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '0234', name: 'Pêra', detail: 'Pêra madura', quantity: 10, unit: 'Kg', type: 'Frutas'} as ItemModel
    ]

    const token: any[] = [
      { id: '', userName: '', password: '', name: '', roles: [], userGroupId: '', token: '' }
    ];
    return { customer, fruits, token };
  }

}
