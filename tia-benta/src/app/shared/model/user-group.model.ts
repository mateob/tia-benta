import { UserGroupConfig } from './config/user-group.config';
export class UserGroupModel extends UserGroupConfig {
  constructor(
    public name?: string,
  ) { super(); }
}
