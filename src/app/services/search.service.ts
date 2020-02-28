import {Injectable} from '@angular/core';
import {Page} from '../models/page';
import pageJson from '../../assets/responce.json';
import {Item} from '../models/item';


@Injectable()
export class SearchService {
  public page: Page = <Page> pageJson;

  public constructor() { }

  public getItems(searchString?: string): Item[] {
    const items: Item[] = this.page.items.filter(item => {
      item.snippet.title.includes('Angular 8 - Быстрый курс за 60 минут');
    });
    return items;
  }
}
