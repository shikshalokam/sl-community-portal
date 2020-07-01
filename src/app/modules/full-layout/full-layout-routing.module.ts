import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';


const routes: Routes = [
  {
    path: '', component: DesignComponent,
     children: [
      { path: 'library', loadChildren: () => import('../library/library.module').then(m => m.LibraryModule) },

      { path: 'myfolder', loadChildren: () => import('../my-folder/my-folder.module').then(m => m.MyFolderModule) },

      { path: 'home', loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule) },

      {
        path: '', redirectTo: '/library', pathMatch: 'full'
      },
      { path: '**', redirectTo: '/library', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
