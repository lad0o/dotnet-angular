import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SapComponent } from '../sap/sap.component';

const routes: Routes = [
	{ path: '', title: 'Home', component: HomeComponent },
	{ path: 'sap', title: 'Sap', component: SapComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
