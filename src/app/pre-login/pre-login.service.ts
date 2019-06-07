import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APICONSTANTS } from '../core/constants/api-constants';
// Service
import { HttpBaseService } from '../core/service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class PreLoginService {
  
  constructor(private httpBaseService : HttpBaseService) { }

  public signInCall(fromData : Object) : Observable<any>{
  return this.httpBaseService.postCall(APICONSTANTS.PRE_LOGIN.LOGIN_URL , fromData);
  }

}
