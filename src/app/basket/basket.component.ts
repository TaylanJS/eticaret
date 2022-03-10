import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'basket',
    templateUrl: 'basket.component.html',
    styleUrls: ['basket.component.scss']
})

export class BasketComponents implements OnInit {
    urunler: {} | any;
    urunIsim: {} | any;
    urunAlindi = false;
    ngOnInit() {
        this.urunler = this.allStorage();
    }
    allStorage() {
        var values = [], name = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(keys[i]);
            name.push(localStorage.getItem(keys[i]));
        }
        this.urunIsim = name;
        return values;
    }
    removeItem(item: any) {
        localStorage.removeItem(item);
        this.urunler = this.allStorage();
    }
    buyAll() {

        localStorage.clear();
        this.urunler = [];
        this.urunAlindi = true;
    }
}