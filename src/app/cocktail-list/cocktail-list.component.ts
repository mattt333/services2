import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../Cocktail.service';
import { Cocktail } from './Cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(private service: CocktailService) { }

  cocktails : Cocktail[] = [];

  ngOnInit(): void {
    this.service.getCocktails().subscribe((cocktailsFromServeur)=>{
      this.cocktails= cocktailsFromServeur;
      console.log(cocktailsFromServeur);
    })
  }

}
