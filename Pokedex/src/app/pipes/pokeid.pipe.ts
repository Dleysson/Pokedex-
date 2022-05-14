import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pokeId'
})

export class PokeId implements PipeTransform{
    transform(id: number): string{
        return id.toString().padStart(3,'0')
    }
}