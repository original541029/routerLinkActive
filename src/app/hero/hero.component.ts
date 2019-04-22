import { Component, OnInit } from '@angular/core';
import * as SampleJson from '../../assets/config.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  data = SampleJson['default'][0];
  id;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id1'],

        console.log(this.id);
    });
  }

  ngOnInit() {

    console.log(this.data);
  }

}
