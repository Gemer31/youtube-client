import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  private sortButtonClicked: boolean = false;
  public searchRequest: string;

  @Output()
  public searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onSortButtonClick(): void {
    this.sortButtonClicked = !this.sortButtonClicked;
  }

  public noSearchClick(): void {
    this.searchEvent.emit(this.searchRequest);
  }
}
