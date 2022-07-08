import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GroupsComponent } from '../../components/groups/groups.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild("groupsTab")
  groupsTab!: GroupsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  tabChanged(event: MatTabChangeEvent) {
    if (event.tab.textLabel == 'Groups') {
      this.groupsTab.refreshRoles();
    }
  }
}
