import { InjectionToken } from '@angular/core'
import { AppConfig } from './app-config.interface'

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config')

export const APP_CONFIG: AppConfig = {
    adpiEndPoint: 'https://workhubcompany.azurewebsites.net/api',
}
