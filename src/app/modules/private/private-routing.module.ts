import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from '../portal-core';



const routes: Routes = [
  {
    path: '', component: PrivateComponent,
     children: [
      { path: 'library', loadChildren: () => import('../library/library.module').then(m => m.LibraryModule)},
      { path: 'myfolder', loadChildren: () => import('../my-folder/my-folder.module').then(m => m.MyFolderModule) },
      {path: 'portals', loadChildren: () => import('../portals/portals.module').then(m => m.PortalsModule)},
      {path: 'workspace', canActivate: [AuthGuard], loadChildren: () => import('../workspace/workspace.module').then(m => m.WorkspaceModule)},
      {path: 'review', loadChildren: () => import('../review/review.module').then(m => m.ReviewModule)},
      {path: 'support', loadChildren: () => import('../support/support.module').then(m => m.SupportModule)},
      {path: 'help', loadChildren: () => import('../help/help.module').then(m => m.HelpModule)},
      {
        path: '', redirectTo: '/library/learning', pathMatch: 'full'
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
