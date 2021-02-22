import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product';

@Pipe({
  name: 'SearchFilterPipe',
})
export class SearchFilterPipe implements PipeTransform {
  transform(product: Product[], searchTitle: string): Product[] {
    if (!product || !searchTitle) {
        return product;
    }
    return product.filter(item => item.title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1);
  }
}