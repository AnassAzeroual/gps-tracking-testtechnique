import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AppService } from '../app.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit {
  private map: any;
  private animatedMarker: any;

  constructor(private srv: AppService) {}
  ngOnInit() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      
      this.initMap();
      this.addPolyline();
    }, 500);
  }


  private initMap() {
    this.map = L.map('map').setView([51.505, -0.09], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private addPolyline() {
    const coordinates: any[] = [];
    this.srv.getAllPoints().subscribe((res: any) => {
      for (const item of res) {
        coordinates.push([item.latitude, item.longitude]);
      }

      const latLngs = coordinates.map(coord => L.latLng(coord[0], coord[1]));
      const polyline = L.polyline(latLngs, { color: 'blue' }).addTo(this.map);

      // Create the start and end markers as before
      const startMarker = L.marker(coordinates[0]).addTo(this.map);
      const endMarker = L.marker(coordinates[coordinates.length - 1]).addTo(this.map);

      // Bind popups to the markers
      startMarker.bindPopup('Start Point').openPopup();
      endMarker.bindPopup('End Point').openPopup();

      // Create an animated marker with a custom icon
      this.animatedMarker = L.marker(latLngs[0], {
        icon: L.icon({
          iconUrl: 'https://unpkg.com/browse/leaflet@1.9.4/dist/images/marker-shadow.png', // Path to your custom icon
          iconSize: [32, 32], // Set the size of your custom icon
          iconAnchor: [16, 32], // Set the anchor point
        })
      }).addTo(this.map);

      let i = 0;

      // Function to animate the marker along the polyline
      const animateMarker = () => {
        if (i < latLngs.length) {
          this.animatedMarker.setLatLng(latLngs[i]);
          i++;
          requestAnimationFrame(animateMarker);
        }
      };

      // Start the animation when the map is ready
      this.map.on('load', () => {
        animateMarker();
      });
    });
  }
}
