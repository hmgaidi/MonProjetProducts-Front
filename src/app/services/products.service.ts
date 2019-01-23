import {Injectable} from '@angular/core';
import {IProduct} from '../domain/iproduct';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {
  } // DI

  getAllProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(environment.URL_Fake);
  }

  getAllProductsById(id: string): Observable<IProduct> {
    return this._http.get<IProduct>(environment.URL_Fake + '/' + id);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this._http.post<IProduct>(environment.URL_Fake, product);
  }
}
