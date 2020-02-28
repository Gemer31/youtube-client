import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input()
  public item: Item;

  constructor(private router: Router) { }

  public ngOnInit(): void {

  }

  public redirectIntoCard(itemId: string): void {
    this.router.navigate(['/card/' + itemId]);
  }
}
