import { Component } from '@angular/core';
import { SapService, SapUser } from '../../core/services/sap-service/sap.service';
import { NgForm, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrl: './sap.component.scss'
})
export class SapComponent {
  pernr: string = '';
  employee: SapUser | null = null;
  error = ''; 

  constructor( private readonly sapService: SapService) {}

  onSubmit() {
    if (!this.pernr) return;

    this.sapService.getEmployee(this.pernr).subscribe({
      next: (res) => {
        this.employee = res;
        this.error = '';
      },
      error: () => {
        this.employee = null;
        this.error = 'თანამშრომელი ვერ მოიძებნა.';
      }
    });
  }

	getEmployee() {
		this.sapService.getEmployee("808080").subscribe({
      next: (res) => {
		console.log(res);
      },
    });
	}
}
