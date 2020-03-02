import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search-items-block',
  templateUrl: './search-items-block.component.html',
  styleUrls: ['./search-items-block.component.scss']
})
export class SearchItemsBlockComponent implements OnInit {

  public items: Item [];
  public searchString: string;

  constructor(private router: ActivatedRoute,
              private searchService: SearchService) { }

  public ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.searchString = params.searchString || '';
      this.items = this.getItemsBySearchString();
    });
  }

  public getItemsBySearchString(): Item[] {
    return this.searchService.getItems(this.searchString);
  }
}
