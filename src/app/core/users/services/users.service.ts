import { Injectable } from '@angular/core';
import { Users } from 'src/app/shared/models/users.model';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: Users[] = [];

    constructor() {
        console.log('Users service initialized');
    }

    async getUsers() {
        const responseJson = await fetch(
            'https://workhubcompany.azurewebsites.net/api/GetUserhttp?code=3XKbTcrOzqyS3Un3Fhl_zlX1pMjPitMO5TjX2gWqMTueAzFuQUtlXg=='
        );
        const response = await responseJson.json();
        this.users.push(response.data);
        console.log(this.users);

        return response.data;
    }

    async deleteUser(userId: number) {
        const responseJson = await fetch(
            `https://workhubcompany.azurewebsites.net/api/DeleteUserhttp?code=T4OVv-gu7DnaioOmpGFeXHo2IrsxkGJ6O6t7W7QfuL_IAzFu5opicQ==&userId=${userId}`,
            {
                method: 'DELETE',
            }
        );
        const response = await responseJson.json();
        return response.data;
    }

    async createUser(user: Users) {
        const responseJson = await fetch(
            `https://workhubcompany.azurewebsites.net/api/CreateUserhttp?code=-_8wsVaOLcrWBrg2xZNVkMjmwMgFBV9Fiw8iYsZ-YNqgAzFuBVlpZg==`,
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const response = await responseJson.json();
        return response.data;
    }

    async updateUser(user: Users, userId: string) {
        const responseJson = await fetch(
            `https://workhubcompany.azurewebsites.net/api/EditUserhttp?code=vSXhQSZclvyieh_tlZQbnEQ-Yni4b_NDN3nvYZUiMMYJAzFugc3D0Q==&userId=${userId}`,
            {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const response = await responseJson.json();
        return response.data;
    }
}
