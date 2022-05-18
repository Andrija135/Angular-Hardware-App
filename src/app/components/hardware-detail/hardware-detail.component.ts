import { Component, OnInit } from '@angular/core';
import { Hardware } from 'src/app/interfaces/hardware';
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
    let code = this.activatedRoute.snapshot.paramMap.get('code');

    this.hardwareService
      .getHardware(code)
      .subscribe((hardware) => (this.hardware = hardware));
  }

  goBack(): void {
    this.location.back();
  }
}
