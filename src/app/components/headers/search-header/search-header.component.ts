import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  private sortButtonClicked: boolean = false;
  public searchString: string;

  @Output()
  public searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public onSortButtonClick(): void {
    this.sortButtonClicked = !this.sortButtonClicked;
  }

  public noSearchClick(): void {
    this.router.navigate(['/search/' + this.searchString]);
  }
}
