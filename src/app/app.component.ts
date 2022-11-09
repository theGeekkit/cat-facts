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
  pic: any= {}

  constructor(private http: HttpClient) {
    this.getRandomFact()
    this.getRandomPic()
  }

  getRandomFact() {
    this.http.get('https://meowfacts.herokuapp.com?count=1').subscribe((result: any) => {
      this.fact = result.data[0]})
  }

  getRandomPic() {
    this.http.get('https://api.thecatapi.com/v1/images/search?limit=1').subscribe((result: any)=> {
      this.pic = result.data[0]})
  }
}
