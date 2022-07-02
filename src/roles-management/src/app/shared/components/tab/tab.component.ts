import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() {
    this.title = "Tab"
  }

  @Input() title: string;
  @Input() active = false;

  ngOnInit(): void {
  }

}
