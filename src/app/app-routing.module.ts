import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './core/users/users.component';

const routes: Routes = [
    {
        path: 'users',
        loadChildren: () =>
            import('./core/users/users.module').then((m) => m.UsersModule),
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
