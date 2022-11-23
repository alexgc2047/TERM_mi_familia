import { Component, OnInit } from '@angular/core';
import { ImageInfo } from '../models/image-info.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  data: ImageInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data.push({
      url: this.images[0],
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      title: "First slide label"
    },{
      url: this.images[1],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "Second slide label"
    },{
      url: this.images[2],
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      title: "Third slide label"
    }
    );
  }

}
