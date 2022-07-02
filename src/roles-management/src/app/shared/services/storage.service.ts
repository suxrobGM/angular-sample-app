import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static get<T>(name: string): T | null {
    return JSON.parse(localStorage.getItem(name) as string) as T;
  }

  static set<T>(name: string, value: T): void {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(name, jsonData);
  }

  static remove(name: string): void {
    localStorage.removeItem(name);
  }
}
