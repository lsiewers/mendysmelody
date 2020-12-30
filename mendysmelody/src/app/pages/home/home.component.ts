import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private metaTagService: Meta,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Mendy's Melody Paardencoaching");
    this.metaTagService.updateTag({ name: 'description', content: 'Twaalf jaar geleden kwam het kleine veulentje Mendy op mijn pad. Een haflingertje van 4 maanden oud. Dat dit kleine veulentje zoveel voor mij zou betekenen kon ik mij toen niet voorstellen. Eigenlijk vond ik het allemaal erg eng dat onvoorspelbare gedrag van veulens en jonge paarden. Mijn dochter van toen 15 jaar kreeg de pony Britta, een enorme wildebras van 2,5 jaar oud die echt een plaats buiten moest krijgen.' });
    this.metaTagService.updateTag({ name: 'og:image', content: '/assets/images/foto1.jpg' });
    this.metaTagService.updateTag({ name: 'og:image:alt', content: 'Wia met de paarden Noa en Britta' });
    this.metaTagService.updateTag({ name: 'og:url', content: '//mendysmelody.nl/' });
  }

}
