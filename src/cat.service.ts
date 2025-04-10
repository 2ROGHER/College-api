import { Injectable } from "@nestjs/common";

interface Cat { 
    id: string; 
    name: string; 
    age: number;
    breed: string;
    color: string;
}

/**
 * This is a [provider] to inject into any class to be used for that class.
 */

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  addCat(cat: Cat) {
    this.cats.push(cat);
  }

  findAllCats(): Cat[] {
    return this.cats;
  }
}