import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users.component';
import { UsersFormComponent } from './components/users-form.component';
import { UsersService } from './services/users.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [UsersComponent, AllUsersComponent, UsersFormComponent],
    imports: [CommonModule, UsersRoutingModule, FontAwesomeModule, FormsModule],
    providers: [UsersService],
})
export class UsersModule {}
