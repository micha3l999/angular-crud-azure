import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/models/users.model';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: [],
})
export class UsersFormComponent implements OnInit {
    user: Users = {
        fullName: '',
        address: '',
        city: '',
    };
    actionSuccess: number = 0;
    userId$ = this.router.paramMap.pipe(
        map((params) => {
            return params.get('userId');
        })
    );

    constructor(
        private usersService: UsersService,
        private router: ActivatedRoute
    ) {}

    ngOnInit(): void {
        let id = null;
        this.userId$.subscribe((userId) => {
            id = userId;
        });
        if (id) {
            this.getUserData(id);
        }
    }

    async saveUser() {
        try {
            let id = null;
            this.userId$.subscribe((userId) => {
                id = userId;
            });
            if (id) {
                await this.usersService.updateUser(this.user, id);
            } else {
                await this.usersService.createUser(this.user);
            }
            this.actionSuccess = 1;
        } catch (error) {
            console.log(error);
            this.actionSuccess = 2;
        }
    }

    async getUserData(id: string): Promise<any> {
        const users: Users[] = await this.usersService.getUsers();
        const currentUser = users.find(
            (user) => user.userId?.toString() === id
        );
        if (currentUser) {
            this.user.address = currentUser.address;
            this.user.fullName = currentUser.fullName;
            this.user.city = currentUser.city;
        }
    }
}
