import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from './file';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  

  constructor(private http:HttpClient) { }
  private url =  "http://localhost:8089"

  public getfile():Observable<File[]>{
    return  this.http.get<File[]>(`${this.url}/getfile`)
}

public delfile(id:number):Observable<any>{
  return this.http.delete<any>(`${this.url}/delfile/${id}`)
  // /delbook/{bookid}
}

public addfile(File:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/addfile`,File)
}

public updatefile(id:number,file:File):Observable<Object>{
  return this.http.put(`${this.url}/updatefile/${id}`,file)
}

public getfilebyid(id:number):Observable<File>{
  return this.http.get<File>(`${this.url}/getfilebyid/${id}`)
}
}