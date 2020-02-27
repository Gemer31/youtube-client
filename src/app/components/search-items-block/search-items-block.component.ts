import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/page';
import {Item} from '../../models/item';
import pageJson from '../../../assets/responce.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-items-block',
  templateUrl: './search-items-block.component.html',
  styleUrls: ['./search-items-block.component.scss']
})
export class SearchItemsBlockComponent implements OnInit {

  public page: Page;
  public items: Item [];
  public searchString: string;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.page = <Page> pageJson;
    this.items = this.page.items;
    this.searchString = null;
  }

  public redirectIntoCard(itemId: string): void {
    this.router.navigate(['/card/' + itemId]);
  }
}
