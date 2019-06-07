import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   *
   * @description get data from local storage based on the key
   * @param {string} key
   * @returns
   * @memberof StorageService
   */
  public getData(key: string) {
    return localStorage.getItem(key);
  }

  /**
   *
   * @description set data to localstorage by key and data
   * @param {*} data
   * @param {string} key
   * @memberof StorageService
   */
  public setData(key: string, data: any): void {
    localStorage.setItem(key, data);
  }

  /**
   *
   * @description remove item from local storage
   * @param {string} key
   * @memberof StorageService
   */
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  /**
   *@description clear complete storage
   *
   * @memberof StorageService
   */
  public clear() {
    localStorage.clear();
  }
}
