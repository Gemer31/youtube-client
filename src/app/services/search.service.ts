import {Injectable} from '@angular/core';
import {Page} from '../models/page';
import pageJson from '../../assets/responce.json';
import {Item} from '../models/item';

@Injectable()
export class SearchService {
  public page: Page = <Page> pageJson;
  public items: Item[] = this.page.items;

  public constructor() { }

  public getItems(searchString?: string): Item[] {
    return this.items.filter(item => item.snippet.title.includes(searchString));
  }

  public sortByDate(): Item[] {
    return this.items.sort((firstItem: Item, secondItem: Item) =>
      +new Date(firstItem.snippet.publishedAt) - +new Date(secondItem.snippet.publishedAt)
    );
  }

  public sortByCountOfView(): Item[] {
    return this.items.sort((firstItem: Item, secondItem: Item) =>
      firstItem.statistics.viewCount - secondItem.statistics.viewCount
    );
  }
}
