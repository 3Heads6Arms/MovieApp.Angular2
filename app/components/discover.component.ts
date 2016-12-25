import { DiscoverService } from './../services/discover.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'discover',
    templateUrl: './app/views/discover.component.html'
})
export class DiscoverComponent implements OnInit {
    private currentPageNumber: number;
    private movies: any[];
    constructor(private discoverService: DiscoverService) {
        this.currentPageNumber = 0;
    }

    ngOnInit() {
        this.discoverService
            .discoverMovies(++this.currentPageNumber)
            .then(movies => this.movies = movies);
    }
}