import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available> {{ housingLocation?.availableUnits }}</li>
          <li>Does this locations have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent {
  // injetando o route
  route: ActivatedRoute = inject(ActivatedRoute);
  // injetando o service
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    // criando a variável que pega o id
    const housingLocationId = Number(this.route.snapshot.params['id']);
    // pegando as informações da propriedade com o id 
    this.housingLocation = this.housingService.getHousingLocationsById(housingLocationId);
  }
}
