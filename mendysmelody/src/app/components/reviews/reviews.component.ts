import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  activeReview = 0;
  reviews = [
    "Tijdens coaching zie je de kracht van Wia en haar paarden. Intuïtief, krachtig en met een enorme kennis laten zij zien waar blokkades zitten. Zij helpen je daarmee zodat je een stap voorwaarts kunt zetten. Maar ook krijg je diepe inzichten,  waarmee je anders naar jezelf en de wereld om je heen gaat kijken. Echt een verrijking!",
    "Al enige tijd loop ik bij een psycholoog, ook in het verleden ben ik al eens eerder onder behandeling van een psycholoog geweest. Helaas heeft mij dit toen niet veel verder gebracht. Waar ik last van heb is dit ik terug val in oude patronen. En daar zelf de oorzaak niet van kan vinden, en ook niet uit kan stappen. Dus blijf ik in een vicieuze cirkel hangen en neem daarin veel aan van wat een ander zegt en neem ik vaak rigoureuze beslissingen die heel verkeerd uit kunnen pakken. Daar voel ik mij heel ongelukkig bij en dat geeft mij heel veel stress. Tijdens de sessies met Wia en haar paarden vond ik het zo bijzonder om te zien hoe de paarden op mij reageerde en hoe snel Wia aanvoelde op welke manier zij mij verder kon helpen. Ook als ik zelf tijdens de sessie soms helemaal vast liep, werd ik zo begeleid dat er uiteindelijk toch antwoorden naar boven kwamen. Ik voelde mij heel veilig en totaal op mijn gemak. Door de hulp en intensieve begeleiding van Wia ben ik nu zo ver dat ik weet wat voor mij de trigger is waardoor ik terug val in een oud patroon, ik heb deze leren herkennen, en ik weet ook wat ik moet doen om hier zelf weer uit te komen. Dit is voor mij zo’n grote verandering en daar ben ik zo ontzettend blij mee. Dat wat de psychologen bij mij over het hoofd zagen, daar legde Wia zo snel de vinger op de zere plek. Dat vind ik heel bijzonder. Ik ben nu echt verder geholpen en ben Britta, Nora, Donna en Wia daar enorm dankbaar voor.",
    "Ik heb bij Wia een zeer liefdevolle coaching sessie beleefd, middels de paarden toch tot nieuwe inzichten gekomen. Ik ben zelf spiritueel coach, maar ook politieagent en heb net een Hbo diploma behaald als docent omgangskunde. Ik kan zeggen dat ik na al deze persoonlijke ontwikkeling blij verrast ben, met de stappen die ik heb kunnen zetten. Zo bijzonder om te beseffen dat je jezelf jarenlang iets voorgehouden hebt, wat de paarden je binnen een uur kunnen laten begrijpen. Bij Wia en de paarden heb ik mij vanaf de eerste minuut veilig gevoeld, er is geen oordeel, waardoor je snel tot de kern kunt komen. Voor mij een zeer waardevolle belevenis, waar ik altijd naar terug zal grijpen, indien er een nieuwe coachvraag ontstaat.",
    "Ik ken Wia als een zeer betrokken, enthousiast, eerlijk, energiek en no-nonsens mens. Altijd staat ze klaar om anderen te helpen. Haar passie voor dieren is iets wat je bij Wia echt niet kan ontgaan. Als coach heb ik mijzelf ook laten coachen door Wia en haar paarden. Geweldig mooi om te ervaren welke inzichten Wia en haar paardenteam mij hebben gegeven. Inzichten waardoor ik mij persoonlijk en professioneel verder kan ontwikkelen. Kortom een echte aanrader voor wie zichzelf beter wil leren kennen of aan de slag wil met persoonlijke issues.",
  ]

  constructor() { }

  ngOnInit() {
  }

  setActive(i: number) {
    if(i < 0) {
      this.activeReview = this.reviews.length - 1;
    } else if (i > this.reviews.length - 1) {
      this.activeReview = 0;
    } else {
      this.activeReview = i;
    }
  }
}
