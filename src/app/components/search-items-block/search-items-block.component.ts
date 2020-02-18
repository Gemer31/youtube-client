import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/page';
import {Item} from '../../models/item';
import pageJson from '../../../assets/responce.json';

@Component({
  selector: 'app-search-items-block',
  templateUrl: './search-items-block.component.html',
  styleUrls: ['./search-items-block.component.scss']
})
export class SearchItemsBlockComponent implements OnInit {

  public page: Page;
  public items: Item [];
  public searchString: string;
  public bb: boolean;

  constructor() { }

  public ngOnInit(): void {
    this.page = pageJson;
    this.items = this.page.items;
    this.searchString = null;
    this.bb = false;
  }

  public setSearchString(searchString: string): void {
    this.bb = true;
    this.items = this.page.items.filter(item => item.snippet.title.includes(searchString));
  }
}
