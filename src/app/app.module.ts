import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Routes } from '@angular/router'
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app-config/app-config.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FontAwesomeModule],
    providers: [
        {
            provide: APP_SERVICE_CONFIG,
            useValue: APP_CONFIG,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
