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

  public showPokemonInfo(event: Event): void {
    const target = (<HTMLLIElement>event.target);
    const pokemonInfo = (<HTMLDivElement>(target).childNodes[1]);
    const pokemonImg = (<HTMLDivElement>(target).childNodes[0]);
    // Rotate effect
    pokemonImg.style.transform = 'rotateY(90deg)';
    // Show info
    setTimeout(() => {
      pokemonInfo.style.opacity = '1';
      pokemonInfo.style.transform = 'rotateY(360deg)';
    }, 500);
  }


  public hidePokemonInfo(event: Event): void {
    const target = (<HTMLLIElement>event.target);
    const pokemonInfo = (<HTMLDivElement>(target).childNodes[1])
    const pokemonImg = (<HTMLDivElement>(target).childNodes[0])
    // Hide info
    setTimeout(() => {
      pokemonInfo.style.transform = '';
      pokemonInfo.style.opacity = '';
    }, 500);
    // Rotate effect
    setTimeout(() => {
      pokemonImg.style.transform = ''
    }, 1000);
  }

  private async fillHome(qty: number): Promise<void> {
    let id = 1
    for (id = 1; id < qty; id++) {
      await this.pokemonService.getPokemonsById(id).toPromise()
        .then((response) => {
          this.pokemonInfos.push(response)
        })
    }
  }
}
