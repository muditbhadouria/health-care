import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { AppService, LabTestDataEl } from '../app.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {
  displayedColumns: string[] = ['lab', 'location', 'positive', 'negative', 'inconclusive', 'total'];
  tableData: LabTestDataEl[] = [];
  initialTableData: LabTestDataEl[] = [];
  labs = new FormControl();
  labsList: string[] = [];
  locations = new FormControl();
  locationsList: string[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getLabTestsData().subscribe(result => {
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
