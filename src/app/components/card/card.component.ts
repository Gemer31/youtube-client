import {Component, Input, OnInit} from '@angular/core';
import pageJson from '../../../assets/responce.json';
import {Item} from '../../models/item';
import {Page} from '../../models/page';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  private card: Item;
  private page: Page;

  constructor() { }

  public ngOnInit(): void {
    this.page = pageJson;

    this.card = this.page.items[0];
  }
}
