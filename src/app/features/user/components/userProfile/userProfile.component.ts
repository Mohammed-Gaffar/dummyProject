import { Component, OnInit } from '@angular/core';
import { user } from '../../model/user';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css'],
  standalone: true,
})
export class UserProfileComponent implements OnInit {
  userId: string | any;
  user!: user;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserData(this.userId);
  }

  getUserData(id: string) {
    this.userService
      .getUserById(this.userId)
      .subscribe((res: user) => (this.user = res));
  }

  onEdit() {}

  onBack() {
    this.router.navigate(['/users']);
  }
}
