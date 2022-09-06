import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Gold } from '../shared/models/gold-price.model';
import { Silver } from '../shared/models/silver-price.model';
import { SocketIoService } from '../shared/services/socket-io.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss'],
})
export class GoldComponent implements OnDestroy {
  path: string = 'silver';
  time = new Date();
  intervalId: any;

  gold: Gold | undefined;
  silver: Silver | undefined;

  private subscriptions: Subscription[] = [];

  constructor( private atv: ActivatedRoute, private router: Router, private sioService: SocketIoService ) {
    this.setPath();
    this.dateTime();

    this.goldPrice();
    this.silverPrice();
  }

  get isSilver(): boolean {
    return this.router.url === "/silver" ? true : false;
  }

  private dateTime(): void {
    // set time and date
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  private setPath(): void {
    const type = this.router.url;
    this.path = type === '/' ? 'silver' : '/';
  }

  private goldPrice() {
    if (this.path === '/') return;
    console.log(this.path)
    this.subscriptions[0] = this.sioService
      .listenGoldPrice<Gold>('goldprice')
      .subscribe((price) => (this.gold = price));
  }

  private silverPrice() {
    if (this.path === 'silver') return;
    console.log(this.path)
    this.subscriptions[1] = this.sioService
      .listenGoldPrice<Gold>('silverprice')
      .subscribe((price) => (this.silver = price));
  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach((subscriber) => subscriber.unsubscribe());
  }
}
