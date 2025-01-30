import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe(response => {
        this.pokemons = response.results.map((pokemon: any, index: number) => {
          return {
            name: pokemon.name,
            url: pokemon.url,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          };
        });
      });
  }
}
