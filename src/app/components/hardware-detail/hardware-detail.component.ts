import { Component, OnInit, Input } from '@angular/core';
import { Hardware } from 'src/app/hardware';

@Component({
  selector: 'app-hardware-detail',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.scss'],
})
export class HardwareDetailComponent implements OnInit {
  @Input() hardware: Hardware;

  constructor() {}

  ngOnInit(): void {}
}
