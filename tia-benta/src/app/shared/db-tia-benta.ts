import { ItemModel } from '@model/item.model';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CustomerModel } from './model/customer.model';

export class DBTiaBenta implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const customer: CustomerModel[] = [
      { id: '1234', name: 'Teste 1', document: '1234' } as CustomerModel,
      { id: '9123', name: 'Teste 2', document: '9123' } as CustomerModel,
      { id: '8123', name: 'Teste 3', document: '8123' } as CustomerModel,
      { id: '7123', name: 'Teste 4', document: '7123' } as CustomerModel,
      { id: '6123', name: 'Teste 5', document: '6123' } as CustomerModel,
    ]
    const greenery: ItemModel[] = [
      { id: '3131', name: 'Alface', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Rabanete', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Agrião', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Couve', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Espinafre', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Rúcula', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Alho Poró', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Coentro', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Salsa', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,
      { id: '1234', name: 'Repolho', detail: 'verduras frescas',quantity: 1,unit: 'KG',type: 'Insumo' } as ItemModel,

    ]

    const token: any[] = [
      { id: '', userName: '', password: '', name: '', roles: [], userGroupId: '', token: '' }
    ];
    return { customer, token, greenery };
  }

}
