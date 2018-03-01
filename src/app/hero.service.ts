import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';


@Injectable()

export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // todo: send the message _after_fetching the heroes:
    this.messageService.add('Hero Service: fetched heroes');
    return of(HEROES);
  }

}
