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

    const geralItems: ItemModel[] = [
      { id: '1234', name: 'Azeite', detail: 'Óleo de soja', quantity: 10, unit: 'L', type: 'Óleos'} as ItemModel,
      { id: '9123', name: 'Farinha', detail: 'Farinha de trigo', quantity: 8, unit: 'Gr', type: 'Insumo'} as ItemModel,
      { id: '8123', name: 'Manteiga', detail: 'Manteiga Parmalat', quantity: 10, unit: 'Gr', type: 'Gorduras'} as ItemModel,
      { id: '7123', name: 'Sal', detail: 'Sal marinho', quantity: 5, unit: 'Gr', type: 'Insumo'} as ItemModel,
      { id: '6123', name: 'Açúcar', detail: 'Açúcar confeiteiro', quantity: 2, unit: 'Kg', type: 'Açúcares'} as ItemModel,
      { id: '5123', name: 'Arroz', detail: 'Arroz branco', quantity: 6, unit: 'Kg', type: 'Grãos'} as ItemModel,
      { id: '4123', name: 'Feijão', detail: 'Feijão preto', quantity: 7, unit: 'Kg', type: 'Grãos'} as ItemModel,
      { id: '3123', name: 'Chocolate em pó', detail: '70% cacau', quantity: 2, unit: 'Gr', type: 'Insumo'} as ItemModel,
      { id: '2123', name: 'Fermento', detail: 'Fermento biológico', quantity: 9, unit: 'Gr', type: 'Insumo'} as ItemModel,
      { id: '0234', name: 'Ovo', detail: 'Ovo de galinha', quantity: 10, unit: 'Un', type: 'Insumo'} as ItemModel
    ]

    const token: any[] = [
      { id: '', userName: '', password: '', name: '', roles: [], userGroupId: '', token: '' }
    ];
    return { customer, geralItems, token };
  }

}
