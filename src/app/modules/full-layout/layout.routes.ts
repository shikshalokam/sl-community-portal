import { Routes, RouterModule } from '@angular/router';
import { LearningResourcesComponent } from '../library/learning-resources/learning-resources.component';
import { ObservationsComponent } from '../library/observations/observations.component';


export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'p404', component: p404Component },
    { path: 'learning', component: LearningResourcesComponent },
    { path: 'observation', component: ObservationsComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'home', component: HomeComponent },
];