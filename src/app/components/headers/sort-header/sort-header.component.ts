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

}
