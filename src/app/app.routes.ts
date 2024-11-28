import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AnnouncementFormComponent } from './pages/profile/announcement-form/announcement-form.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PetOwnerComponent } from './pages/home-page/pet-owner/pet-owner.component';
import { SitterComponent } from './pages/home-page/sitter/sitter.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomePageComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'petowner', component: PetOwnerComponent},
    {path: 'sitter', component: SitterComponent},
    {path: 'form', component: AnnouncementFormComponent}
    
];
