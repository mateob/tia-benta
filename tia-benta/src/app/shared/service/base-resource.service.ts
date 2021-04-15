import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseModel } from '../model/base/base.model';
import { Utils } from '../utils/utils';
import { environment } from '../../../environments/environment';

export abstract class BaseResourceService<T extends BaseModel>{

  protected header = {
    headers: {
      'Content-Type': 'application/json',
      'X-PO-No-Message': 'false'
    }
  }

  protected http: HttpClient;
  protected apiUrl: string;

  constructor(
    protected injector: Injector,
    protected type: new () => T
  ) {
    this.http = injector.get(HttpClient);
    this.apiUrl = environment.URL_API;
  }

  // GET
  // All
  getAll(): Promise<T[]> {
    return this.http
      .get<T[]>(this.apiUrl, this.header)
      .pipe(
        map(this.jsonDataToResouces.bind(this)),
        catchError(this.handleError)
      )
      .toPromise();
  }

  // ById
  getById(id: string): Promise<T> {
    return this.http
      .get<T>(`${this.apiUrl}/rota/${id}`, this.header)
      .pipe(
        map(this.jsonDataToResouce.bind(this)),
        catchError(this.handleError)
      )
      .toPromise();
  }

  // POST
  create(resource: T): Promise<T> {
    return this.http
      .post<T>(`${this.apiUrl}/rota/`,
        this.beforeCallRequest(resource, true), this.header)
      .pipe(
        map(this.jsonDataToResouce.bind(this)),
        catchError(this.handleError)
      )
      .toPromise();
  }

  // PUT
  update(resource: T): Promise<T> {
    return this.http
      .put<T>(`${this.apiUrl}/rota/${resource.id}`,
        this.beforeCallRequest(resource), this.header)
      .pipe(
        map(this.jsonDataToResouce.bind(this)),
        catchError(this.handleError)
      )
      .toPromise();
  }

  // DELETE
  delete(id: string): Promise<any> {
    return this.http
      .delete(`${this.apiUrl}/rota/${id}`, this.header)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  protected jsonDataToResouces(jsonData: any[]): T[] {
    return jsonData.reduce((target: T[], data) => {
      target.push(Utils.fromJson<T>(this.type, data));
      return target;
    }, []);
  }

  protected jsonDataToResouce(jsonData: any): T {
    return Utils.fromJson<T>(this.type, jsonData);
  }

  protected handleError(error: any): Observable<any> {
    return throwError(error);
  }

  protected beforeCallRequest(entity: T, isCreated?: boolean): T {
    entity.id = '';
    return this.jsonDataToResouce(entity);
  }
}
