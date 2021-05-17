import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public selected: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
}
