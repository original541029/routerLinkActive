import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as SampleJson from '../../assets/config.json';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  data = SampleJson['default'][0];
  id;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'],

        console.log(this.id);
    });

  }

  ngOnInit() {

  }
}
