import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [{

  path: '',
  children: [
    { path: 'sample', component: SampleComponent },
    // {
    //   path: '',
    //   redirectTo: 'learning',
    //   pathMatch: 'full'
    // }
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFolderRoutingModule { }
