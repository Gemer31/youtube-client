import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item';
import {Router} from '@angular/router';
import {CustomDatePipe} from '../../pipes/custom-date.pipe';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input()
  public item: Item;

  constructor(private router: Router,
              private customDatePipe: CustomDatePipe) { }

  public ngOnInit(): void {

  }

  public redirectIntoCard(itemId: string): void {
    this.router.navigate(['/card/' + itemId]);
  }

  public getDateLine(date: string): string {
    return '/assets/images/' + this.customDatePipe.transform(new Date(date)) + '.svg';
  }
}
