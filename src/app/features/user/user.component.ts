import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { user } from './model/user';
import { UserService } from './service/user.service';
import { map } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class UserComponent implements OnInit {
  users: user[] = [];

  constructor(private UserService: UserService, private router: Router) {}

  ngOnInit() {
    this.getAll();
    console.log(this.router.config);
  }

  getAll(): void {
    this.UserService.getUsers().subscribe((res: user[]) => {
      this.users = res;
    });
  }

  viewUser(user: user) {
    console.log('View user:', user);
    this.router.navigate(['users/profile', user.id]);
  }

  editUser(user: user) {
    console.log('Edit user:', user);
    this.router.navigate(['users/edit', user.id]);
  }

  deleteUser(user: user) {
    console.log('Delete user:', user);
  }
}
