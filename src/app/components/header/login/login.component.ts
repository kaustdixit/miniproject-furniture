import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/test/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        // alert(res.message);
        this.router.navigate(['List']);
        this.auth.setuserdetails(this.loginForm.value.username);
        this.loginForm.reset();
      },
      error: (err) => {
        alert(err?.error.message);
        this.loginForm.reset();
      },
    });
  }
}
