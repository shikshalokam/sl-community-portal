import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';



const routes: Routes = [
  {
    path: '', component: PrivateComponent,
     children: [
      { path: 'library', loadChildren: () => import('../library/library.module').then(m => m.LibraryModule) },

      { path: 'myfolder', loadChildren: () => import('../my-folder/my-folder.module').then(m => m.MyFolderModule) },

      {
        path: '', redirectTo: '/library/learning', pathMatch: 'full'
      },
      // { path: '**', redirectTo: '/library', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
