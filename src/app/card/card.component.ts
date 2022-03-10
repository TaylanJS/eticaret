import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})

export class CardComponent implements OnInit {
    @Input() orders: any = [];
    constructor() { }
    ngOnInit() { }
    selectBuyItem = [];
    buyItem(item: any) {
        this.selectBuyItem = item;
        localStorage.setItem(item.id, item.name);
    }
}