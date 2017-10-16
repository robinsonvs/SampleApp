import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemServiceService {

  itensUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.itensUrl);
  }

}
