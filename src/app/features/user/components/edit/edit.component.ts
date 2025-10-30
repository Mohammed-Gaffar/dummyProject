import { Component, OnInit } from '@angular/core';
import { user } from '../../model/user';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class EditComponent implements OnInit {
  user: user | null = null;
  userId: string | null = null;
  userform!: FormGroup;

  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.getUserData(+this.userId);
    }

    this.userform = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      maidenName: [''],
      age: [null],
      gender: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      username: ['', Validators.required],
      password: [''],
      birthDate: [''],
      image: [''],
      bloodGroup: [''],
      height: [null],
      weight: [null],
      eyeColor: [''],
      hair: this.fb.group({
        color: [''],
        type: [''],
      }),
      ip: [''],
      address: this.fb.group({
        address: [''],
        city: [''],
        state: [''],
        stateCode: [''],
        postalCode: [''],
        coordinates: this.fb.group({
          lat: [null],
          lng: [null],
        }),
        country: [''],
      }),
      macAddress: [''],
      university: [''],
      bank: this.fb.group({
        cardExpire: [''],
        cardNumber: [''],
        cardType: [''],
        currency: [''],
        iban: [''],
      }),
      company: this.fb.group({
        department: [''],
        name: [''],
        title: [''],
        address: this.fb.group({
          address: [''],
          city: [''],
          state: [''],
          stateCode: [''],
          postalCode: [''],
          coordinates: this.fb.group({
            lat: [null],
            lng: [null],
          }),
          country: [''],
        }),
      }),
      ein: [''],
      ssn: [''],
      userAgent: [''],
      crypto: this.fb.group({
        coin: [''],
        wallet: [''],
        network: [''],
      }),
      role: [''],
    });
  }

  getUserData(userId: number) {
    this.UserService.getUserById(userId).subscribe((res: user) => {
      this.user = res;

      // Fix birthDate format
      const birthDate = new Date(res.birthDate);
      const formattedDate = birthDate.toISOString().split('T')[0]; // yyyy-MM-dd

      this.userform.patchValue({
        ...res,
        birthDate: formattedDate,
      });
    });
  }

  update() {
    if (this.userform.valid && this.user) {
      // const updatedUser: user = { ...this.user, ...this.userform.value };
      const updatedUser: user = this.userform.value;

      this.UserService.updateUser(this.user.id, updatedUser).subscribe({
        next: (res: user) => {
          alert('successed , User updated  - new user data in console');
          console.log(res);
          this.router.navigate(['users']);
        },
        error: (err) => {
          console.error('Update failed:', err);
          alert('Failed to update user. Please try again later.');
        },
      });
    } else {
      alert('Form is invalid. Please check required fields.');
    }
  }
}
