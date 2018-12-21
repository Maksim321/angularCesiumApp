import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private mapContainer: HTMLElement;

  constructor(private _elemRef: ElementRef,
  			  @Inject(DOCUMENT) private document){
  	this.mapContainer = this.document.createElement("div");
  	this.mapContainer.className = "cesiumContainer";
  	this._elemRef.nativeElement.appendChild(this.mapContainer);  	
  }

  ngOnInit(){
  	const viewer = new Cesium.Viewer(this.mapContainer);
  }
}
