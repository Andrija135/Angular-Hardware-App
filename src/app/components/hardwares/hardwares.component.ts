import { Component, OnInit } from '@angular/core';
import { Hardware } from 'src/app/hardware';
import { HardwareService } from 'src/app/services/hardware.service';

@Component({
  selector: 'app-hardwares',
  templateUrl: './hardwares.component.html',
  styleUrls: ['./hardwares.component.scss'],
})
export class HardwaresComponent implements OnInit {
  hardwares: Hardware[];

  constructor(private hardwareService: HardwareService) {}

  ngOnInit(): void {
    this.getHardwares();
  }

  getHardwares(): void {
    this.hardwareService
      .getHardwares()
      .subscribe((hardwares) => (this.hardwares = hardwares));
  }

  delete(hardware: Hardware): void {
    this.hardwares = this.hardwares.filter((h) => h.code !== hardware.code);
    this.hardwareService.deleteHardware(hardware.code).subscribe();
  }
}
