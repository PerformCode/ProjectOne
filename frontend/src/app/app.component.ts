// import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  imports: [RouterOutlet, UserFormComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}