import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {ContaService} from '../../../services/conta/conta.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fuse-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: fuseAnimations
})
export class FuseLoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;

  constructor(private fuseConfig: FuseConfigService,
              private formBuilder: FormBuilder,
              private contaService: ContaService,
              private router: Router) {

    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });

    this.loginFormErrors = {
      email: {},
      password: {}
    };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.contaService.login(email, password)
      .subscribe(success => {
        if (success) {
            this.router.navigate(['sample']);
        } else {
          console.log('TODO: O login não teve sucesso, verificar!');
        }
      });


    // subscribe(
    //     (result: boolean) => {
    //       if (result) {

    //       }
    //     }
    // );
  }
}
