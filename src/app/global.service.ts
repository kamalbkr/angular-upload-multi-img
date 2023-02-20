import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  constructor(private _http: HttpClient) {}
  saveFileToDB(file) {
    return this._http.post('https://file.io', file, {
      reportProgress: true,
      observe: 'events',
    });
  }
  uniqueId(): string {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      const S4 = (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .substring(1);
      arr.push(S4);
    }
    return arr.join('-');
  }
}
