import { Observable } from 'rxjs';

export interface Iservice {
    get():Array<T>;
    post(t: T):Observable<T>;
    put(t: T): Observable<T>;
    patch(t: T): Observable<T>;
    detele(id: number): void;
    
}
