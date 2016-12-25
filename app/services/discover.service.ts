import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Constants } from '../commons/constants';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DiscoverService {
    private readonly url: string;
    constructor(private http: Http) { }

    discoverMovies(pageNumber: number): Promise<any> {
        let url = Constants.SERVER_URL + 'discover/movie' + '?api_key=' + Constants.API_KEY + '&page=' + pageNumber;
        return this.http.get(url)
            .toPromise()
            .then<any>(response => {
                let movies = response.json().results as any[];
                this.getMovieGeneres()
                    .then(genres => {
                        movies.forEach(movie => {
                            let movieGenres: any[] = genres.filter(genre => {
                                let genreIds = movie.genre_ids as number[];
                                return genreIds.some(genreId => genreId === genre.id);
                            });
                            movie.genres = movieGenres;
                            movie.poster_path = Constants.IMAGE_SERVER_URL + Constants.IMAGE_SIZES.poster.w342 + movie.poster_path;
                        });
                    });
                return movies;
            })
            .catch(error => Promise.reject(error));
    }

    private getMovieGeneres(): Promise<any[]> {
        let url = Constants.SERVER_URL + 'genre/movie/list' + '?api_key=' + Constants.API_KEY;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json().genres)
            .catch(error => Promise.reject(error));
    }
}