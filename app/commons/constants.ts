export class Constants {
    static SERVER_URL = 'https://api.themoviedb.org/3/';
    static IMAGE_SERVER_URL = 'https://image.tmdb.org/t/p/';
    static API_KEY = '5d70e3447b10f44c50bdf7e55e436fea';
    static IMAGE_SIZES = {
        backdrop: {
            w300: "w300",
            w780: "w780",
            w1280: "w1280",
            original: "original"
        }, logo: {
            w45: "w45",
            w92: "w92",
            w154: "w154",
            w185: "w185",
            w300: "w300",
            w500: "w500",
            original: "original"
        }, poster: {
            w92: "w92",
            w154: "w154",
            w185: "w185",
            w342: "w342",
            w500: "w500",
            w780: "w780",
            original: "original"
        }, profile: {
            w45: "w45",
            w185: "w185",
            h632: "h632",
            original: "original"
        }, still: {
            w92: "w92",
            w185: "w185",
            w300: "w300",
            original: "original"
        }
    };
}