import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  private sortButtonClicked: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public onSortButtonClick(): void {
    this.sortButtonClicked = !this.sortButtonClicked;
  }

}
