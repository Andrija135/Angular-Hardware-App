import { Component, OnInit } from '@angular/core';
import { Hardware } from 'src/app/hardware';
import { HARDWARES } from 'src/app/mock-hardwares';
import { HardwareService } from 'src/app/services/hardware.service';

@Component({
  selector: 'app-hardwares',
  templateUrl: './hardwares.component.html',
  styleUrls: ['./hardwares.component.scss'],
})
export class HardwaresComponent implements OnInit {
  hardwares: Hardware[];

  selectedItem: Hardware;

  constructor(private hardwareService: HardwareService) {}

  ngOnInit(): void {
    this.getHardwares();
  }

  getHardwares(): void {
    this.hardwareService
      .getHardwares()
      .subscribe((hardwares) => (this.hardwares = hardwares));
  }

  onSelect(item: Hardware): void {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }
}
