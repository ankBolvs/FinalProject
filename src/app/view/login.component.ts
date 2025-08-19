import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/authService';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signInWithGoogle() {
    this.auth
      .googleSignIn()
      .then((res) => {
        console.log('Logged in:', res.user?.displayName);
        this.router.navigateByUrl('/group'); /* navigate(['/login-success']); */
      })
      .catch((err) => console.error('Login error:', err));
  }
}
