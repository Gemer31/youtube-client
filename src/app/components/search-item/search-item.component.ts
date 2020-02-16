import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item';
import {Statistics} from '../../models/statistics';
import {Snipped} from '../../models/snipped';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  public statistics: Statistics ={
    viewCount: 23,
    likeCount: 43,
    dislikeCount: 53,
    favoriteCount: 12,
    commentCount: 22
  };
  public searchItem: Item;
  public title: string = "Title";

  constructor() { }

  public ngOnInit(): void {
    this.searchItem.id = '1';
    this.searchItem.kind = 'kind';

  }

}
