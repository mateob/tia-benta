import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CustomerModel } from './model/customer.model';

export class DBTiaBenta implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const customer: CustomerModel[] = [
      { id: '1234',name: 'Teste 1',document: '1234',sex: 'Masculino',birthDate: '01/01/2001',ddd: 51,phone: 123456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '01',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste1@teste.com.br',} as CustomerModel,
      { id: '1235',name: 'Teste 2',document: '1334',sex: 'Masculino',birthDate: '02/01/2001',ddd: 51,phone: 223456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '02',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste2@teste.com.br',} as CustomerModel,
      { id: '1236',name: 'Teste 3',document: '1434',sex: 'Masculino',birthDate: '03/01/2001',ddd: 51,phone: 323456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '03',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste3@teste.com.br',} as CustomerModel,
      { id: '1237',name: 'Teste 4',document: '1534',sex: 'Masculino',birthDate: '04/01/2001',ddd: 51,phone: 423456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '11',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste4@teste.com.br',} as CustomerModel,
      { id: '1238',name: 'Teste 5',document: '1634',sex: 'Masculino',birthDate: '05/01/2001',ddd: 51,phone: 523456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '12',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste5@teste.com.br',} as CustomerModel,
      { id: '1239',name: 'Teste 6',document: '1734',sex: 'Masculino',birthDate: '06/01/2001',ddd: 51,phone: 623456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '13',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste6@teste.com.br',} as CustomerModel,
      { id: '1240',name: 'Teste 7',document: '1834',sex: 'Masculino',birthDate: '07/01/2001',ddd: 51,phone: 723456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '21',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste7@teste.com.br',} as CustomerModel,
      { id: '1241',name: 'Teste 8',document: '1934',sex: 'Masculino',birthDate: '08/01/2001',ddd: 51,phone: 823456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '22',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste8@teste.com.br',} as CustomerModel,
      { id: '1242',name: 'Teste 9',document: '2034',sex: 'Masculino',birthDate: '09/01/2001',ddd: 51,phone: 923456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '23',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste9@teste.com.br',} as CustomerModel,
      { id: '1243',name: 'Teste 10',document: '2134',sex: 'Masculino',birthDate: '10/01/2001',ddd: 51,phone: 103456789,personType: 'Fisica',state: 'RS',city: 'Porto Alegre',neighborhood: 'Centro',address: 'Andradas',addressNumber: 14,complement: '31',postalCode: 91919191,municipalityIbgeCode: '999',email: 'teste10@teste.com.br',} as CustomerModel,

    ]

    const token: any[] = [
      { id: '', userName: '', password: '', name: '', roles: [], userGroupId: '', token: '' }
    ];
    return { customer, token };
  }

}
