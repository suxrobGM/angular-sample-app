import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { GroupsComponent } from '../../components/groups/groups.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  router: Router

  links = [
    {
      label: 'Groups',
      link: 'groups'
    },
    {
      label: 'Roles',
      link: 'roles'
    }
  ];
  activeLink = this.links[0].link;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/home/groups');
    this.activeLink = this.links[0].link;
  }
}
