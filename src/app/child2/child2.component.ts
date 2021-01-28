import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  constructor(private ds: DataService) {}
  dataFromParent: any;
  ngOnInit(): void {
    this.dataFromParent = this.ds.data;
  }
}
