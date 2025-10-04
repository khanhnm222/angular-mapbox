import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;

  async ngAfterViewInit(): Promise<void> {
    // SSR check
    if (typeof window === 'undefined') return;

    const mapboxgl = await import('mapbox-gl');

    this.map = new mapboxgl.Map({
      container: 'map-view',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [105.854444, 21.029167],
      zoom: 12,
      accessToken: 'pk.eyJ1Ijoia2FpaHVlYm5lciIsImEiOiJjbDA4cHl4ajIwNXU3M2p0YW5qNHQ4aXRoIn0.6Rk947DgABOTwfbdAEaVVQ'
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }
}