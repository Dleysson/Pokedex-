import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private menu: HTMLDivElement = document.createElement('div');
  private menuIsOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public pokeballClick(event: Event): void {
    if (!this.menuIsOpen) {
      (<HTMLImageElement>event.target).style.animation = 'PokeballMovement 0.8s ease-in-out'
      setTimeout(() => {
        this.menu = <HTMLDivElement>document.querySelector('.pokeball-menu');
        this.menu.style.visibility = 'unset';
        this.menu.style.height = '9.75rem';
        this.menuIsOpen = true
      }, 800)
    } else {
      (<HTMLImageElement>event.target).style.animation = ''
      this.menu.style.visibility = '';
      this.menu.style.height = '';
      this.menuIsOpen = false
    }
  }
}
