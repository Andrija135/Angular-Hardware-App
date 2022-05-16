import { Component, OnInit, Input } from '@angular/core';
import { Hardware } from 'src/app/hardware';
import { ActivatedRoute } from '@angular/router';
import { HardwareService } from 'src/app/services/hardware.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.scss'],
})
export class HardwareDetailComponent implements OnInit {
  hardware: Hardware | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private hardwareService: HardwareService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHardware();
  }

  getHardware(): void {
    let hardwareCode = this.activatedRoute.snapshot.paramMap.get('code');

    this.hardwareService.getHardwares().subscribe((hardwaresList) => {
      this.hardware = hardwaresList.find(
        (hardware) => hardware.code == hardwareCode
      );
    });
  }

  goBack(): void {
    this.location.back();
  }
}
