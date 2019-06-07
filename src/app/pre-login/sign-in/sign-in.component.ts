import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Interface
import { LogInObject,LogInResponseData } from '../../core/interface/iPrelogin';
// Service 
import { PreLoginService } from '../pre-login.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public sigInForm: FormGroup;
  public loginResponseDatam : LogInResponseData;
  // subscription
  private signupSubscription : Subscription;

  constructor(private preLoginService : PreLoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sigInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });
  }

  /**
   * @description function call when user click on log in button
   */
  public onLoginCall(){
    this.signupSubscription = this. preLoginService.signInCall(this.sigInForm.value).subscribe((response:LogInObject)=>{
      if(response.success === true){
        this.loginResponseDatam = response.responseData;
      }else{
        console.log(response.message);
      }
    }, error => {
      console.log(error);
    })
  }

  /**
   * @description unsubscribing the subscriptions if any
   *
   * @memberof AddEditFactorComponent
   */
  ngOnDestroy() {
    if(this.signupSubscription)
    this.signupSubscription.unsubscribe();
  }

}
