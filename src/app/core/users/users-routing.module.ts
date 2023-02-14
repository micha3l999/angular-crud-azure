import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersFormComponent } from './components/users-form.component';
import { AllUsersComponent } from './components/all-users.component';
import { CommonModule } from '@angular/common';

const routes = [
    {
        path: 'new-user',
        component: UsersFormComponent,
    },
    {
        path: ':userId',
        component: UsersFormComponent,
    },
    {
        path: '',
        component: AllUsersComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
