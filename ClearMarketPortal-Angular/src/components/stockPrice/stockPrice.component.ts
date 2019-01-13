import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { StockPriceService } from './stockPrice.service';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stockPrice.html',
  styleUrls: ['./stockPrice.scss']
})

export class StockPriceComponent implements OnInit {
  currentPrice: Observable<Object>;
  cols = [
    { field: 'stock', header: 'Stock' },
    { field: 'price', header: 'Price' },
    { field: 'volume', header: 'Volume' }
  ]
  stocks: Object;
  constructor(private service: StockPriceService) {
    console.log('stock page constructed');
  }

  ngOnInit() {
    this.service.currentPrice.subscribe(data => {
      console.log('data', data);
      this.stocks = data;
    })
    console.log('stock page initiated');
  }
}
