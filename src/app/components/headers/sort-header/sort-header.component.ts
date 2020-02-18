import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss']
})
export class SortHeaderComponent implements OnInit {

  public sortingItems: string[] = ['date', 'count of view', 'by word or sentance'];

  constructor() { }

  public ngOnInit(): void {
  }

  public onSortClick(sortProperty: string): void {
    switch (sortProperty) {
      case SortingEnum.DATE: this.sortByDate();
      case SortingEnum.COUNT_OF_VIEWS: this.sortByCountView();
      case SortingEnum.DATE: this.sortByDate();
      default: console.log();
    }
  }

  public sortByDate(): void {

  }

  public sortByCountView(): void {

  }
}
