import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService]
})
export class HomeComponent implements OnInit {
  public pokemonInfos: Array<any> = new Array

  constructor(private http: HttpClient, public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.fillHome(151)
  }

  private async fillHome(qty: number) {
    let id = 1
    for (id = 1; id < qty; id++) {
      await this.pokemonService.getPokemonsById(id).toPromise()
        .then((response) => {
          this.pokemonInfos.push(response)
        })
    }
  }
}
