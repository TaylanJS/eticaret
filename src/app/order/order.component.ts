import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { OrderList } from "./order";
@Component({
    selector: 'order',
    templateUrl: 'order.component.html',
    styleUrls: ['order.component.scss']
})
export class OrderComponent implements OnInit {
    constructor(
        private orderService: OrderService
    ) { }
    searchText: any;
    orders: OrderList[] | any;
    ngOnInit() {
        this.getOrders();
    }
    async getOrders() {
        await this.orderService.getOrder().subscribe(orders => this.orders = orders);
    }
}