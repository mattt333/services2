import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail-list/Cocktail';




@Injectable({
  providedIn: 'root'
})
export class CocktailService {



  constructor(private http : HttpClient) { }

  public getCocktails() : Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('http://localhost:8080/cocktails');
  }
}
