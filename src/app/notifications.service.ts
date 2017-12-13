import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Items from './mock_data';

@Injectable()
export class NotificationsService {

  constructor() { }

  getNotifications() {
    return Observable.create(observer => {
      const getRandomTime = () => {
        const min = 1000;
        const max = 60000;
        return Math.floor(Math.random() * (max - min)) + min;
      }
      const randomTimeout = () => {
        const index = Math.floor(Math.random() * 19);
        observer.next(Items[index].name)
        id = setTimeout(randomTimeout, getRandomTime());
      }
      let id = setTimeout(randomTimeout, getRandomTime());
    });
  }
}
