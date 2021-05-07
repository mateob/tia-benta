import { UserModel } from '@model/user.model';
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
    const user: UserModel[] = [
      { id: '212121', name: 'Tia Benta', email: 'tiabenta@tiabenta.com.br', password: '11111'} as UserModel,
      { id: '212122', name: 'Tia Fatima', email: 'tiafatima@tiabenta.com.br', password: '22222'} as UserModel,
      { id: '212123', name: 'Tia Elza', email: 'tiaelza@tiabenta.com.br', password: '33333'} as UserModel,
      { id: '212124', name: 'Tia Rosangela', email: 'tiarosangela@tiabenta.com.br', password: '44444'} as UserModel,
      { id: '212125', name: 'Tia Lucia', email: 'tialucia@tiabenta.com.br', password: '55555'} as UserModel,
      { id: '212126', name: 'Tia Loeci', email: 'tialoeci@tiabenta.com.br', password: '66666'} as UserModel,
      { id: '212127', name: 'Tia Rose', email: 'tiarose@tiabenta.com.br', password: '77777'} as UserModel,
      { id: '212128', name: 'Tia Gloria', email: 'tiagloria@tiabenta.com.br', password: '88888'} as UserModel,
      { id: '212129', name: 'Tia Vera', email: 'tiavera@tiabenta.com.br', password: '99999'} as UserModel,
      { id: '212110', name: 'Tia Terezinha', email: 'tiaterezinha@tiabenta.com.br', password: '1010101010'} as UserModel,
    ]

    const token: any[] = [
      { id: '', userName: '', password: '', name: '', roles: [], userGroupId: '', token: '' }
    ];
    return { customer, token, user };
  }
}

