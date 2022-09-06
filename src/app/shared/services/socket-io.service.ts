import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketIoService {
  private readonly URL_SOCKETIO: string = 'http://203.154.83.135:25550';
  private socket: Socket;

  constructor() {
    this.socket = io(this.URL_SOCKETIO);
  }

  public listenGoldPrice<T>(eventListener: string = 'goldprice'): Observable<T> {
    return new Observable((observer: Subscriber<T>) => {
      this.socket.on(eventListener, (value: T) => {
        observer.next(value);
      });
    });
  }
}
