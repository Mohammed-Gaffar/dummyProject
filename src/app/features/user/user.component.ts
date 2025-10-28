import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { user } from './model/user';
import { UserService } from './service/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class UserComponent implements OnInit {
  users: user[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.UserService.getUsers().subscribe((res: user[]) => {
      this.users = res;
    });
  }

  viewUser(user: user) {
    console.log('View user:', user);
  }

  editUser(user: user) {
    console.log('Edit user:', user);
  }

  deleteUser(user: user) {
    console.log('Delete user:', user);
  }
}
