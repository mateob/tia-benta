import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CustomerModel } from './model/customer.model';
import { UserGroupModel } from './model/user-group.model';

export class DBTiaBenta implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const customer: CustomerModel[] = [
      { id: '1234', name: 'Teste 1', document: '1234' } as CustomerModel,
      { id: '9123', name: 'Teste 2', document: '9123' } as CustomerModel,
      { id: '8123', name: 'Teste 3', document: '8123' } as CustomerModel,
      { id: '7123', name: 'Teste 4', document: '7123' } as CustomerModel,
      { id: '6123', name: 'Teste 5', document: '6123' } as CustomerModel,
    ]

    const userGroup: UserGroupModel[] = [
      { id: '1234', name: 'Gerente'} as UserGroupModel,
      { id: '9123', name: 'Caixa'} as UserGroupModel,
      { id: '8123', name: 'Entregador'} as UserGroupModel,
      { id: '7123', name: 'Garçom'} as UserGroupModel,
      { id: '6123', name: 'Cozinheiro'} as UserGroupModel,
      { id: '5123', name: 'Aux. Cozinha'} as UserGroupModel,
      { id: '4123', name: 'Cliente'} as UserGroupModel,
      { id: '3123', name: 'Fornecedor'} as UserGroupModel,
      { id: '2123', name: 'Nutricionista'} as UserGroupModel,
      { id: '0123', name: 'Aux. Limpeza'} as UserGroupModel
    ]

    const token: any[] = [
      { id: '', userName: '', password: '', name: '', roles: [], userGroupId: '', token: '' }
    ];
    return { customer, userGroup };
  }

}
