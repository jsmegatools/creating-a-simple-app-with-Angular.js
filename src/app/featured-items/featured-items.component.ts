import { Component, OnInit } from '@angular/core';
import Item from '../item';
import Items from '../mock_data';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css']
})
export class FeaturedItemsComponent implements OnInit {

  constructor() { }

  items: Item[]

  trackByItems(index: number, item: Item): number { return item.id; }

  ngOnInit() {
    const featuredItems: Item[]
      = Items.sort( function() { return 0.5 - Math.random() } )
    this.items = featuredItems;
  }

}
