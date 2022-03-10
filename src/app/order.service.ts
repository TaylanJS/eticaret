import { Injectable } from '@angular/core';
import { Orders } from './order/order.datasource';
import { OrderList } from './order/order';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrder(): Observable<OrderList[]> {
    return of(Orders);
  }
}
