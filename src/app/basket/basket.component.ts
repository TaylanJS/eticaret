import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'basket',
    templateUrl: 'basket.component.html',
    styleUrls: ['basket.component.scss']
})

export class BasketComponents implements OnInit {
    urunler: [] | any;
    urunIsim: [] | any;
    urunAlindi = false;
    ngOnInit() {
        this.urunler = this.allStorage();
        console.log(this.urunIsim);
    }
    allStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
        while (i--) {
            values.push(keys[i]);
        }
        var data = [],
            keyss = Object.values(localStorage),
            i = keyss.length;
        while (i--) {
            data.push(JSON.parse(keyss[i]));
        }
        this.urunIsim = (data);
        return values;
    }
    removeItem(item: any) {
        localStorage.removeItem(item);
        this.urunler = this.allStorage();
    }
    addItem(item: any) {
        var data = window.localStorage.getItem(item);
        if (data != null) {
            let urun = JSON.parse(data);
            urun.quantity = urun.quantity + 1;
            window.localStorage.setItem(item, JSON.stringify(urun));
            this.allStorage();
            console.log(urun);
        }

    }
    deleteItem(item: any) {
        var data = window.localStorage.getItem(item);
        if (data != null) {
            let urun = JSON.parse(data);
            if (urun.quantity > 1) {
                urun.quantity = urun.quantity + -1;
            }
            window.localStorage.setItem(item, JSON.stringify(urun));
            this.allStorage();
            console.log(urun);
        }
    }
    buyAll() {

        localStorage.clear();
        this.urunler = [];
        this.urunAlindi = true;
    }
}