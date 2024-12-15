import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ILeague } from '../models/league.model';
import { CODE_LEAGUES } from '../constants';
import { ISeason } from '../models/season.model';
import { IClasification } from '../models/clasification.model';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {


  constructor() { }


  //https://www.thesportsdb.com/api/v1/json/3/all_leagues.php

  getFootballLeagues(){

    return from(CapacitorHttp.get({
      url: `${environment.apiURL}/all_leagues.php`
    }).then( (response: HttpResponse) =>{

      const leagues = response.data['leagues'] as ILeague[];
      if(!leagues){
        return [];
      }
      return leagues
          .filter(league => CODE_LEAGUES.includes(league.idLeague))
          .sort( (a, b) => a.strLeagueAlternate < b.strLeagueAlternate ? -1 : 1 );
    }).catch( (error)=> {
      return [];
    }))

  }

//https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id=4328
  getSeasons(idLeague: string){

    return from(CapacitorHttp.get({
      url: `${environment.apiURL}/search_all_seasons.php?id=${idLeague}`
    }).then( (response: HttpResponse)=>{
      const seasons = response.data['seasons'] as ISeason[];
      if(!seasons){
        return [];
      }
      return seasons.reverse();
    }).catch( (error)=> {
      return [];
    }))

  }

  //https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2024-2025
  getTableClasification(idLeague: string, season: string){

    return from(CapacitorHttp.get({
      url: `${environment.apiURL}/lookuptable.php?l=${idLeague}&s=${season}`
    }).then( (response: HttpResponse) => {
      const clasification = response.data['table'] as IClasification[];
      if(!clasification){
        return [];
      }
      return clasification;
    }).catch( (error)=> {
      return [];
    }))

  }
}
