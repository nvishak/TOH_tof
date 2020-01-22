import { Component, OnInit } from '@angular/core';
import { DefaultServiceService } from './../default-service.service';
import * as $ from 'jquery';

// const $ = require('jquery');
// const fancytree = require('jquery.fancytree');
// require('jquery.fancytree/dist/modules/jquery.fancytree.edit');
// require('jquery.fancytree/dist/modules/jquery.fancytree.filter');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private defaultService:DefaultServiceService) { }

  ngOnInit() {
    this.defaultService.getAllDepots().subscribe((data) => {
     console.log("All Depots",data);
    });

    console.log($('window'));

    // const tree = fancytree.getTree('#tree');
  }

}
