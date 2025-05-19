//import { Component } from '@angular/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserFormComponent {
  user = { name: '', email: '' };


  constructor(
    private http: HttpClient,
    private userService: UserService
   ) {}

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        alert('✅ ' + response);
        this.user = { name: '', email: '' }; // Clear form
      },
      error: (err) => {
        alert('❌ Something went wrong: ' + err.message);
      }
    });
  }
}