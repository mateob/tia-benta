import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CustomerModel } from './model/customer.model';
import { ItemModel } from './model/item.model';

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

    const geralItems: ItemModel[] = [
      { id: '1234', name: 'Maçã', detail: 'Maçã madura', quantity: 10, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '9123', name: 'Banana', detail: 'Banana madura', quantity: 8, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '8123', name: 'Laranja', detail: 'Laranja madura', quantity: 10, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '7123', name: 'Bergamota', detail: 'Bergamota madura', quantity: 5, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '6123', name: 'Melancia', detail: 'Melancia madura', quantity: 2, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '5123', name: 'Melão', detail: 'Melão maduro', quantity: 6, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '4123', name: 'Mamão', detail: 'Mamão maduro', quantity: 7, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '3123', name: 'Abacate', detail: 'Abacate maduro', quantity: 2, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '2123', name: 'Ameixa', detail: 'Ameixa madura', quantity: 9, unit: 'Kg', type: 'Frutas'} as ItemModel,
      { id: '0234', name: 'Pêra', detail: 'Pêra madura', quantity: 10, unit: 'Kg', type: 'Frutas'} as ItemModel,
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
