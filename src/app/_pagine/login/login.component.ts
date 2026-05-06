import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../_servizi/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    // IT: inizializzo il form con i due campi richiesti e li rendo  obbligatori
    // EN: Initialize the form with the two required fields and I made them required
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login effettuato!', res);
          // IT: Se il login ha successo, vado alla pagina principale (o a una dashboard)
          // EN: If the login is successful, I go to the main page (or to a dashboard)
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Errore di login', err);
          // IT: Se il login fallisce, mostro un messaggio di errore
          // EN: If the login fails, I show an error message
          this.errorMessage = 'Credenziali non valide. Riprova.';
        }
      });
    }
  }
}
