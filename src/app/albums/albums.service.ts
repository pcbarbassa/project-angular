import { Injectable } from '@angular/core';
import { Iservice } from '../generic/iservice';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService implements Iservice{
  get(): any[] {
    throw new Error("Method not implemented.");
  }
  post(t: any): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  put(t: any): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  patch(t: any): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  detele(id: number): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
