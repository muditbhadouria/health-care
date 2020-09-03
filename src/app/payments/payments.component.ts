import { Component, OnInit } from '@angular/core';
import { AppService, LabPaymentDataEl } from '../app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  displayedColumns: string[] = ['lab', 'location', 'creditCard', 'thirdParty', 'uninsured', 'total'];
  tableData: LabPaymentDataEl[] = [];
  initialTableData: LabPaymentDataEl[] = [];
  labs = new FormControl();
  labsList: string[] = [];
  locations = new FormControl();
  locationsList: string[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getLabPaymentsData().subscribe(result => {
      this.tableData = result;
      this.initialTableData = result;
      const labList: Set<string> = new Set();
      const locationsList: Set<string> = new Set();
      for (const row of result) {
        labList.add(row.lab);
        locationsList.add(row.location);
      }
      this.labsList = Array.from(labList);
      this.locationsList = Array.from(locationsList);
    });
  }

  filterTable(): void {
    const filteredLabs = this.labs.value;
    const filteredLocations = this.locations.value;
    this.tableData = [...this.initialTableData];
    if (filteredLabs && filteredLabs.length > 0) {
      this.tableData = this.tableData.filter(e => filteredLabs.includes(e.lab));
    }
    if (filteredLocations && filteredLocations.length > 0) {
      this.tableData = this.tableData.filter(e => filteredLocations.includes(e.location));
    }
  }

}
