import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search-items-block',
  templateUrl: './search-items-block.component.html',
  styleUrls: ['./search-items-block.component.scss']
})
export class SearchItemsBlockComponent implements OnInit {

  public items: Item [];
  public searchString: string;

  constructor(private router: Router,
              private searchService: SearchService) { }

  public ngOnInit(): void {
    this.items = this.getItemsBySearchString();
    this.searchString = '';
  }

  public getItemsBySearchString(): Item[] {
    return this.searchService.getItems(this.searchString);
  }
}
