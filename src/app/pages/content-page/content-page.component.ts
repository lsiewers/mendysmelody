import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  private _jsonURL = '/assets/pages/';
  private slug = '';
  imagePath = 'assets/images/';
  data: {
    header: {
      image: string;
      alt: string;
    },
    content: {
      bgColor: string;
      type: string;
      title: string;
      text: string;
      image: string;
      alt: string;
    }
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private metaTagService: Meta,
    private titleService: Title
  ) {
    this.route.params.subscribe(params => {
        this.slug = params.id;
        this.getJSON(this._jsonURL + this.slug + '.json').then(data => {
          this.data = data;
          this.setMetadata(data);
        });
    })
  }

  public getJSON(url): Promise<any> {
    return this.http.get(url).toPromise();
  }

  ngOnInit() {
  }

  setMetadata(data) {
    this.titleService.setTitle(data.title);
    this.metaTagService.updateTag({ name: 'description', content: data.content[0].text });
    this.metaTagService.updateTag({ name: 'og:image', content: this.imagePath + data.header.image });
    this.metaTagService.updateTag({ name: 'og:image:alt', content: data.header.alt });
    this.metaTagService.updateTag({ name: 'og:url', content: '//mendysmelody.nl/verhalen/' + this.slug });
  }
}
