import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareDetailComponent } from './components/hardware-detail/hardware-detail.component';
import { HardwaresComponent } from './components/hardwares/hardwares.component';

const routes: Routes = [
  { path: 'hardwares', component: HardwaresComponent },
  { path: 'detail/:code', component: HardwareDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
