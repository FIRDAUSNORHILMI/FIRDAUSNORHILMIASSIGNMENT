import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      // tslint:disable-next-line: max-line-length
      "Bearer BQDXB8naZKNhMGhOsalh17taDhkDuzD05aDgXqOYhGEYAb8xIo3TuY2WLKFgya96PB78or8MCOeIsjS6J_VO6e_tJBaEbux86FHLF-gH8_Z0-7XTa4N_qtvAj6Okb5NY6Mc15HxhOLyA3jGvW2Qg12nSyl9GjWrnQRAMLIV_4g_Vcl_KUi2aE85C1n3aCwjb"
      );
    return this._http.get(url, { headers });
  }
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = 'search?query=' + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) : any{
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
