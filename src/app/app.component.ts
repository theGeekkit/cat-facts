import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-facts';
  fact: any= {}

  constructor(private http: HttpClient) {
    this.getRandomFact()
  }

  getRandomFact() {
    this.http.get('https://cat-fact.herokuapp.com', {headers: {Accept: 'application/json'}}).subscribe(result => {this.fact = result})
  }
}
