import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [{
  path: 'sample',
  component: SampleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFolderRoutingModule { }
