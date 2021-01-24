import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(private ds: DataService) {}

  dataFromParent: any;

  ngOnInit(): void {
    this.dataFromParent = this.ds.data;
  }
}
