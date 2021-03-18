import { ItemModule } from '../../page/dashboard/item/item.module';

export class RecipeModel {
  constructor(
    public name?: string,
    public price?: number,
    public items?: ItemModule[],
  ) { }
}
