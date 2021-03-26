import { ItemModule } from '../../page/dashboard/item/item.module';
import { RecipeConfig } from './config/recipe.config';

export class RecipeModel extends RecipeConfig {
  constructor(
    public name?: string,
    public price?: number,
    public items?: ItemModule[],
  ) { super(); }
}
