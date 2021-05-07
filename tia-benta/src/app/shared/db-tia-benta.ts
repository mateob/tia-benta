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
      { id: '1234', name: 'Teste 1'} as UserGroupModel,
      { id: '9123', name: 'Teste 2'} as UserGroupModel,
      { id: '8123', name: 'Teste 3'} as UserGroupModel,
      { id: '7123', name: 'Teste 4'} as UserGroupModel,
      { id: '6123', name: 'Teste 5'} as UserGroupModel,
      { id: '5123', name: 'Teste 6'} as UserGroupModel,
      { id: '4123', name: 'Teste 7'} as UserGroupModel,
      { id: '3123', name: 'Teste 8'} as UserGroupModel,
      { id: '2123', name: 'Teste 9'} as UserGroupModel,
      { id: '0123', name: 'Teste 10'} as UserGroupModel
    ]

    const token: any[] = [
      { id: '', userName: '', password: '', name: '', roles: [], userGroupId: '', token: '' }
    ];
    return { customer, userGroup };
  }

}
