import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services/electron/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ports;
  constructor(private router: Router, private electronService: ElectronService) { }

  async ngOnInit() {
    console.log('HomeComponent INIT');
    this.ports = await this.electronService.driveList.list();
    console.log('ports', this.ports);
  }

  stringify(port) {
    return JSON.stringify(port, null, 4);
  }
}
