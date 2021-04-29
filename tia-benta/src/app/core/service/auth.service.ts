import { Injectable, Injector } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../shared/model/user.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { Utils } from '../../shared/utils/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseNotificationComponent } from '../../shared/component/base-component/base-notification.component';
import { Router } from '@angular/router';
import { PoToasterType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseNotificationComponent {

  private readonly JWT_TOKEN: string = 'JWT_TOKEN';
  private readonly TIME_EXPIRE: string = 'TIME_EXP';
  private readonly CURRENT_USER: string = 'CURRENT_USER';

  private apiPath: string;
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  private header = {
    headers: {
      'Content-Type': 'application/json'
    },
  };

  constructor(private http: HttpClient, private router: Router, protected injector: Injector) {
    super(injector);
    this.currentUserSubject = new BehaviorSubject<UserModel>(Utils.fromJson(UserModel, localStorage.getItem(this.CURRENT_USER)));
    this.currentUser = this.currentUserSubject.asObservable();
    this.apiPath = `${environment.AUTH_URL}/user`;
  }

  public get getToken(): string {
    return localStorage.getItem(this.JWT_TOKEN) || '';
  }

  public get isLogged(): boolean {
    return !!this.getToken;
  }

  public get isTokenExpired(): boolean {
    const date = this.getTokenExpirationDate();
    if (date === undefined || date.toString() === 'Invalid Date') {
      return true;
    }
    return date.valueOf() <= new Date().valueOf();
  }

  public async login(userName: string, password: string) {
    return await this.http
      .post<UserModel>(`${this.apiPath}/authenticate`, { userName, password }, this.header)
      .pipe(
        map((resp: any) => {
          if (resp) {
            const { data: jwtDecoded }: any = jwtDecode(resp.token);
            this.setToStorage(this.JWT_TOKEN, resp.token);
            this.setToStorage(this.TIME_EXPIRE, jwtDecoded.exp);
            const user: UserModel = Utils.fromJson(UserModel, jwtDecoded);
            this.currentUserSubject.next(user);
            const { password, ...restUser } = user;
            this.setToStorage(this.CURRENT_USER, JSON.stringify(restUser));
          }
        }),
      )
      .toPromise();
  }

  public logout(): void;
  public logout(message: string): void;
  public logout(message?: string): void {
    if (message) {
      this.handlerNotification(message, PoToasterType.Warning);
    }
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.TIME_EXPIRE);
    localStorage.removeItem(this.CURRENT_USER);
    this.currentUserSubject.next(new UserModel());
    this.router.navigateByUrl('dashboard/login', { skipLocationChange: true })
      .then(() => this.router.navigate(['dashboard/login']));
  }

  private getTokenExpirationDate(): Date {
    const date = new Date(0);
    date.setUTCSeconds(parseInt(localStorage.getItem(this.TIME_EXPIRE) || '0'));
    return date;
  }

  private setToStorage(storageId: string, data: string): void {
    localStorage.setItem(storageId, data);
  }
}
