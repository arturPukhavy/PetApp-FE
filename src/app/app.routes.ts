import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapComponent } from './pages/home-page/map/map.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { AnnouncementFormComponent } from './pages/announcement-form/announcement-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomePageComponent},
    {path: 'map', component: MapComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'announcement', component: AnnouncementComponent},
    {path: 'form', component: AnnouncementFormComponent}
    
];
