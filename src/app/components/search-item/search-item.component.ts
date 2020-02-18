import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input()
  public item: Item;

  constructor() { }

  public ngOnInit(): void {

  }
}
