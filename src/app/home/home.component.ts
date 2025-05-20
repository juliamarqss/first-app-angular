import { Component, inject, Inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city"/>
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
        [housingLocation]="housingLocation"
        *ngFor="let housingLocation of housingLocationList"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  // Criando uma lista vazia
  housingLocationList: HousingLocation[] = [];

  // Instânciando o serviço
  housingService: HousingService = inject(HousingService);

  constructor() {
    // Alimentando a lista com o service
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
