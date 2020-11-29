import { HttpClient } from '@angular/common/http';
import { Bear } from '../bear/bear.model'
import { Injectable } from '@angular/core';
import { Subject ,forkJoin } from 'rxjs';
import {  findIndex, map } from 'rxjs/operators';
@Injectable({providedIn : "root"})
export class BearDataService{
    constructor(private http : HttpClient){}
    bearChanged = new Subject<Bear[]>();
    private bears : Bear[] = [];

    
    
    // featchBears(){this.http.get<Bear[]>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json').subscribe(data =>{
    //         this.bears = data;
    //         this.bearChanged.next(this.bears.slice());
    //     })
    // }
    featchBears(){
        let bearUrl = this.http.get<Bear[]>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json');
        let bearImageUrl = this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json');
        forkJoin([bearUrl, bearImageUrl]).subscribe(data => {
            let image = data[1];
            data[0].forEach((element,index) => {
                element.imagePath = image[index % 5].image;
            });
            this.bears = data[0];
            this.bearChanged.next(this.bears.slice());
          });
    }

    
    getBears(){
        return this.bears.slice();
    }
}