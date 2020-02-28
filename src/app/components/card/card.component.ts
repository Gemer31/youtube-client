import {Component, Input, OnInit} from '@angular/core';
import pageJson from '../../../assets/responce.json';
import {Item} from '../../models/item';
import {Page} from '../../models/page';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private card: Item;
  private page: Page;
  private cardId: string;

  constructor(private router: ActivatedRoute) { }

  public ngOnInit(): void {
    this.page = pageJson;

    this.router.params.subscribe((params) => {
      this.cardId = params.id;
      this.page.items.forEach(item => {
        if (item.id === this.cardId) {
          this.card = item;
        }
      });
    });
  }
}
