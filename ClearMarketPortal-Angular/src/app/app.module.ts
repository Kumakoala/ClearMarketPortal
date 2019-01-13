// Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// Component Imports
import { AppComponent } from './app.component';
import { StockPriceComponent } from 'src/components/stockPrice/stockPrice.component';
// Service Imports
import { StockPriceService } from 'src/components/stockPrice/stockPrice.service';
// PrimNG Imports
import { TableModule } from 'primeng/table';

const config: SocketIoConfig = {
  url: 'http://localhost:8081',
  options: {}
}

@NgModule({
  declarations: [
    AppComponent,
    StockPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [StockPriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
