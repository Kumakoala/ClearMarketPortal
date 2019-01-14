import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable ()

export class StockPriceService {
  currentPrice = this.socket.fromEvent<Object>('price');
  interval: any;
  constructor(private socket: Socket) {
    this.interval = setInterval(() => {
      this.socket.emit('priceUpdate');
    }, 1000)
  }

  financialWrapNumber(num) {
    return Number.parseFloat(num).toFixed(2);
  }
}
