import { ItemConfig } from './config/item.config';
export class ItemModel extends ItemConfig {
  constructor(
    public name?: string,
    public detail?: string,
    public quantity?: number,
    public unit?: string,
    public type?: string
  ) { super(); }
}
