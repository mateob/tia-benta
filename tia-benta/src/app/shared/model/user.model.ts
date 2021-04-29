import { UserConfig } from './config/user.config';
export class UserModel extends UserConfig {
  constructor(
    public name?: string,
    public email?: string,
    public password?: string
  ) { super(); }
}
