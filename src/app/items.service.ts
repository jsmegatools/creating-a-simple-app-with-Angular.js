import { Injectable } from '@angular/core';
import Items from './mock_data';

@Injectable()
export class ItemsService {

  constructor() { }

  getItems() {
    return Items;
  }

}
