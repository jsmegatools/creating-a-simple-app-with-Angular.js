import { Component, OnInit } from '@angular/core';
import Item from '../item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css']
})
export class FeaturedItemsComponent implements OnInit {

  constructor(
    private itemsService: ItemsService
  ) { }

  items: Item[]

  trackByItems(index: number, item: Item): number { return item.id; }

  ngOnInit() {
    const featuredItems: Item[]
      = this.itemsService.getItems()
      .sort( function() { return 0.5 - Math.random() } )
    this.items = featuredItems;
  }

}
