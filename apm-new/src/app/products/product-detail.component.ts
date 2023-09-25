import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'pm-product-detail', // we are removing the selector because we don't want to embed it, instead we want to use routing to display it
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor() {}

  ngOnInit(): void {}
}
