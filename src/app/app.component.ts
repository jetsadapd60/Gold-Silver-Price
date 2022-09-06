import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Gold } from './shared/models/gold-price.model';
import { Silver } from './shared/models/silver-price.model';
import { SocketIoService } from './shared/services/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
