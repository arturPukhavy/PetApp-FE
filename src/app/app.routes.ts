import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AnnouncementFormComponent } from './pages/profile/announcement-form/announcement-form.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { PetOwnerComponent } from './pages/home-page/pet-owner/pet-owner.component';
import { SitterComponent } from './pages/home-page/sitter/sitter.component';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomePageComponent},
    {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'sign-in', component: SignInComponent},
    {path: 'petowner', component: PetOwnerComponent, canActivate: [AuthGuard]},
    {path: 'sitter', component: SitterComponent, canActivate: [AuthGuard]},
    {path: 'form', component: AnnouncementFormComponent, canActivate: [AuthGuard]}
    
];
