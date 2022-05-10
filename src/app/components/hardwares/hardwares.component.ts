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

  add(
    name: string,
    code: string,
    price: number,
    type: string,
    nrAvailable: number
  ): void {
    name = name.trim();
    code = code.trim();
    type = type.trim();

    if (!name || !code || !price || !type || !nrAvailable || code.length < 5) {
      return;
    }

    this.hardwareService
      .addHardware({ name, code, price, type, nrAvailable } as Hardware)
      .subscribe((hardware) => {
        this.hardwares.push(hardware);
      });
  }

  delete(hardware: Hardware): void {
    this.hardwares = this.hardwares.filter((h) => h.code !== hardware.code);
    this.hardwareService.deleteHardware(hardware.code).subscribe();
  }
}
