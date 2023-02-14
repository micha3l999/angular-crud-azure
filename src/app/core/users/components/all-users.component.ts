import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/models/users.model';
import { UsersService } from '../services/users.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: [],
})
export class AllUsersComponent implements OnInit {
    users: Users[] = [];
    faTrash = faTrash;

    constructor(private usersService: UsersService) {}

    async ngOnInit() {
        try {
            this.users = await this.usersService.getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUser(userId?: number) {
        try {
            if (userId) {
                await this.usersService.deleteUser(userId);
                this.users = await this.usersService.getUsers();
            }
        } catch (error) {
            console.log(error);
        }
    }
}
