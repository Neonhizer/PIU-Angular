import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/models/item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {


  readonly baseUrl = "https://localhost:44385/api/item/";

  constructor(public httpClient: HttpClient) { }



getItems(): Observable<Item[]> {
  return this.httpClient.get(this.baseUrl + 'get') as Observable<Item[]>;
}

getItemById(id: number): Observable<Item> {
  return this.httpClient.get(this.baseUrl + 'getitems/' + id) as Observable<Item>;
}

createItem(item: Item): Observable<Item> {
  return this.httpClient.post(this.baseUrl + 'post', item) as Observable<Item>;
}

delete(id: number): Observable<null> {
  return this.httpClient.delete(this.baseUrl + "delete/" + id) as unknown as Observable<null>;
}

edit(item: Item): Observable<null> {
  return this.httpClient.put(this.baseUrl + 'edit/' + item.id, item) as unknown as Observable<null>;
}
}