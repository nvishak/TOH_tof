declare var require: any;
import { Component, OnInit } from '@angular/core';
import { DefaultServiceService } from './../default-service.service';
// import * as $ from 'jquery';
const $ = require('jquery');
// import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';

const fancytree = require('jquery.fancytree');
require('jquery.fancytree/dist/modules/jquery.fancytree.edit');
require('jquery.fancytree/dist/modules/jquery.fancytree.filter');



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private defaultService: DefaultServiceService) { }

  ngOnInit() {
    this.defaultService.getAllDepots().subscribe((data) => {
      console.log("All Depots", data);
    });

    // $("#tree").fancytree({
    //   source: [
    //     { title: "Node 1", key: "1" },
    //     {
    //       title: "Folder 2", key: "2", folder: true, children: [
    //         { title: "Node 2.1", key: "3" },
    //         { title: "Node 2.2", key: "4" }
    //       ]
    //     }
    //   ]
    // });

    $("#treegrid").fancytree({
      extensions: ["table"],
      table: {
        indentation: 20,      // indent 20px per node level
        nodeColumnIdx: 2 // render the checkboxes into the 1st column
      },
      source: [
{
"title": "Books",
"expanded": true,
"folder": true,
"children": [
{
"title": "Art of War",
"type": "book",
"author": "Sun Tzu",
"year": -500,
"qty": 21,
"price": 5.95
},
{
"title": "The Hobbit",
"type": "book",
"author": "J.R.R. Tolkien",
"year": 1937,
"qty": 32,
"price": 8.97
},
{
"title": "The Little Prince",
"type": "book",
"author": "Antoine de Saint-Exupery",
"year": 1943,
"qty": 2946,
"price": 6.82
},
{
"title": "Don Quixote",
"type": "book",
"author": "Miguel de Cervantes",
"year": 1615,
"qty": 932,
"price": 15.99
}
]
},
{
"title": "Music",
"folder": true,
"children": [
{
"title": "Nevermind",
"type": "music",
"author": "Nirvana",
"year": 1991,
"qty": 916,
"price": 15.95
},
{
"title": "Autobahn",
"type": "music",
"author": "Kraftwerk",
"year": 1974,
"qty": 2261,
"price": 23.98
},
{
"title": "Kind of Blue",
"type": "music",
"author": "Miles Davis",
"year": 1959,
"qty": 9735,
"price": 21.9
},
{
"title": "Back in Black",
"type": "music",
"author": "AC/DC",
"year": 1980,
"qty": 3895,
"price": 17.99
},
{
"title": "The Dark Side of the Moon",
"type": "music",
"author": "Pink Floyd",
"year": 1973,
"qty": 263,
"price": 17.99
},
{
"title": "Sgt. Pepper's Lonely Hearts Club Band",
"type": "music",
"author": "The Beatles",
"year": 1967,
"qty": 521,
"price": 13.98
}
]
},
{
"title": "Electronics & Computers",
"expanded": true,
"folder": true,
"children": [
{
"title": "Cell Phones",
"folder": true,
"children": [
{
"title": "Moto G",
"type": "phone",
"author": "Motorola",
"year": 2014,
"qty": 332,
"price": 224.99
},
{
"title": "Galaxy S8",
"type": "phone",
"author": "Samsung",
"year": 2016,
"qty": 952,
"price": 509.99
},
{
"title": "iPhone SE",
"type": "phone",
"author": "Apple",
"year": 2016,
"qty": 444,
"price": 282.75
},
{
"title": "G6",
"type": "phone",
"author": "LG",
"year": 2017,
"qty": 951,
"price": 309.99
},
{
"title": "Lumia",
"type": "phone",
"author": "Microsoft",
"year": 2014,
"qty": 32,
"price": 205.95
},
{
"title": "Xperia",
"type": "phone",
"author": "Sony",
"year": 2014,
"qty": 77,
"price": 195.95
},
{
"title": "3210",
"type": "phone",
"author": "Nokia",
"year": 1999,
"qty": 3,
"price": 85.99
}
]
},
{
"title": "Computers",
"folder": true,
"children": [
{
"title": "ThinkPad",
"type": "computer",
"author": "IBM",
"year": 1992,
"qty": 16,
"price": 749.9
},
{
"title": "C64",
"type": "computer",
"author": "Commodore",
"year": 1982,
"qty": 83,
"price": 595
},
{
"title": "MacBook Pro",
"type": "computer",
"author": "Apple",
"year": 2006,
"qty": 482,
"price": 1949.95
},
{
"title": "Sinclair ZX Spectrum",
"type": "computer",
"author": "Sinclair Research",
"year": 1982,
"qty": 1,
"price": 529
},
{
"title": "Apple II",
"type": "computer",
"author": "Apple",
"year": 1977,
"qty": 17,
"price": 1298
},
{
"title": "PC AT",
"type": "computer",
"author": "IBM",
"year": 1984,
"qty": 3,
"price": 1235
}
]
}
]
},
{
"title": "More...",
"folder": true,
"lazy": true
}
],
      tooltip: function(event, data){
        return data.node.data.author;
      },
      lazyLoad: function(event, data) {
        data.result = {url: "ajax-sub2.json"}
      },
      renderColumns: function(event, data) {
        var node = data.node,
          $tdList = $(node.tr).find(">td");

        // (index #0 is rendered by fancytree by adding the checkbox)
        $tdList.eq(1).text(node.getIndexHier());
        // (index #2 is rendered by fancytree)
        $tdList.eq(3).text(node.data.qty);
        // Rendered by row template:
//        $tdList.eq(4).html("<input type='checkbox' name='like' value='" + node.key + "'>");
      }
    });
    /* Handle custom checkbox clicks */
    $("#treegrid").on("click", "input[name=like]", function(e){
      var node = $.ui.fancytree.getNode(e),
        $input = $(e.target);

      e.stopPropagation();  // prevent fancytree activate for this row
      if($input.is(":checked")){
        alert("like " + node);
      }else{
        alert("dislike " + node);
      }
    });

  }

}
