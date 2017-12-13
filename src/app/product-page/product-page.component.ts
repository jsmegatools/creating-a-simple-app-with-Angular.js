import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';

import Item from '../Item';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) { }

  product: Item;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const product: Item
      = this.itemsService.getItems().find((item: Item) => item.id === id);
    this.product = product;
  }

}
