import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  activeReview = 0;
  reviews = [
    {
      quote: "Tijdens coaching zie je de kracht van Wia en haar paarden. Intuïtief, krachtig en met een enorme kennis laten zij zien waar blokkades zitten. Zij helpen je daarmee zodat je een stap voorwaarts kunt zetten. Maar ook krijg je diepe inzichten,  waarmee je anders naar jezelf en de wereld om je heen gaat kijken. Echt een verrijking!",
      author: "Anoniem"
    },
    {
      quote: "Al enige tijd loop ik bij een psycholoog, ook in het verleden ben ik al eens eerder onder behandeling van een psycholoog geweest. Helaas heeft mij dit toen niet veel verder gebracht. Waar ik last van heb is dit ik terug val in oude patronen. En daar zelf de oorzaak niet van kan vinden, en ook niet uit kan stappen. Dus blijf ik in een vicieuze cirkel hangen en neem daarin veel aan van wat een ander zegt en neem ik vaak rigoureuze beslissingen die heel verkeerd uit kunnen pakken. Daar voel ik mij heel ongelukkig bij en dat geeft mij heel veel stress. Tijdens de sessies met Wia en haar paarden vond ik het zo bijzonder om te zien hoe de paarden op mij reageerde en hoe snel Wia aanvoelde op welke manier zij mij verder kon helpen. Ook als ik zelf tijdens de sessie soms helemaal vast liep, werd ik zo begeleid dat er uiteindelijk toch antwoorden naar boven kwamen. Ik voelde mij heel veilig en totaal op mijn gemak. Door de hulp en intensieve begeleiding van Wia ben ik nu zo ver dat ik weet wat voor mij de trigger is waardoor ik terug val in een oud patroon, ik heb deze leren herkennen, en ik weet ook wat ik moet doen om hier zelf weer uit te komen. Dit is voor mij zo’n grote verandering en daar ben ik zo ontzettend blij mee. Dat wat de psychologen bij mij over het hoofd zagen, daar legde Wia zo snel de vinger op de zere plek. Dat vind ik heel bijzonder. Ik ben nu echt verder geholpen en ben Britta, Nora, Donna en Wia daar enorm dankbaar voor.",
      author: "Anoniem"
    },
    {
      quote: "Ik heb bij Wia een zeer liefdevolle coaching sessie beleefd, middels de paarden toch tot nieuwe inzichten gekomen. Ik ben zelf spiritueel coach, maar ook politieagent en heb net een Hbo diploma behaald als docent omgangskunde. Ik kan zeggen dat ik na al deze persoonlijke ontwikkeling blij verrast ben, met de stappen die ik heb kunnen zetten. Zo bijzonder om te beseffen dat je jezelf jarenlang iets voorgehouden hebt, wat de paarden je binnen een uur kunnen laten begrijpen. Bij Wia en de paarden heb ik mij vanaf de eerste minuut veilig gevoeld, er is geen oordeel, waardoor je snel tot de kern kunt komen. Voor mij een zeer waardevolle belevenis, waar ik altijd naar terug zal grijpen, indien er een nieuwe coachvraag ontstaat.",
      author: "Petra"
    },
    {
      quote: "Ik ken Wia als een zeer betrokken, enthousiast, eerlijk, energiek en no-nonsens mens. Altijd staat ze klaar om anderen te helpen. Haar passie voor dieren is iets wat je bij Wia echt niet kan ontgaan. Als coach heb ik mijzelf ook laten coachen door Wia en haar paarden. Geweldig mooi om te ervaren welke inzichten Wia en haar paardenteam mij hebben gegeven. Inzichten waardoor ik mij persoonlijk en professioneel verder kan ontwikkelen. Kortom een echte aanrader voor wie zichzelf beter wil leren kennen of aan de slag wil met persoonlijke issues.",
      author: "Annita"
    },
    {
      quote: "Ik heb het coaching traject dat ik bij Wia Jongsma gevolgd heb als zeer positief ervaren. Ik ben fotografe en liep op professioneel- en persoonlijk vlak tegen een aantal blokkades aan. Zeker op het gebied van het opstarten en professionaliseren van mijn eigen bedrijf. Met behulp van de coaching sessies met Wia heb ik een aantal heldere inzichten gekregen, waardoor ik de keuzes die voor mij lagen gemakkelijker heb kunnen maken. De focus ligt weer op positieve zaken en daardoor is het enthousiasme en plezier in mijn werk versterkt, zonder twijfel en vertrouwend op mijn eigen intuïtie. Dit geeft energie. Het coaching traject was niet alleen erg leuk om te doen samen met Wia en haar ontzettend lieve paarden, het is voor mij ook erg waardevol gebleken! ",
      author: "Anoniem"
    },
    {
      quote: "Toen ik ervoor koos om bij Wia een sessie paardecoaching toen wist ik niet precies wat ik kon verwachten. Ik was blij verrast dat ik aan het eind van de sessie meerdere inzichten had gekregen. Enorm bedankt Wia.",
      author: "Antoinette"
    },
    {
      quote: "Voor het eerst paardencoaching. Alhoewel ik paarden wel wat spannend vind was het een prachtige sessie. Het is een bijzondere ervaring die je nieuwe inzichten geeft. Wia is open in haar houding en voelt alles goed aan. Het is zo bijzonder mee te maken hoe kleine Donna en de andere paarden je kunnen spiegelen. Ik had van te voren niet kunnen bedenken hoe verrijkend deze ervaring is.",
      author: "Anoniem"
    },
    {
      quote: "De paardencoachsessies bij Wia zijn mij goed bevallen. Wia is een lieve, enthousiaste en begripvolle vrouw. Ze praat vol passie over het vak en weet duidelijk waar ze het over heeft. Ze luistert écht naar je en heeft me daardoor tijdens de sessies kunnen helpen en aanvullen waar ik dat nodig had. Ook de paarden zijn stuk voor stuk lief en uniek. Ik voelde me op mijn gemak bij ze. Door de sessies heb ik beter op een rijtje gekregen wat er speelde en waar ik mee zat. Ik ben gaan inzien dat ik daar zelf veel invloed op kan uitvoeren en ben daarin zelfverzekerder geworden.  Het was wel ook even heftiger en intensiever dan ik had verwacht, maar al met al ben ik blij met het resultaat. Dat mag er wezen!",
      author: "Anoniem"
    },
    {
      quote: "De coachsessie met Wia en haar paarden heb ik als heel bijzonder ervaren. Onbewust onverwerkte pijn en onzekerheid kwam in de sessie in alle hevigheid naar de oppervlakte. In alle rust hebben we een familie-opstelling gedaan. Met hulp van de paarden heb ik inzicht gekregen in voortdurende (familie)patronen en mijn rol daarin. Belastende patronen die voor mij niet langer dienend waren. Na de bewustwording heb ik ze in liefde los kunnen laten. Het was een intense waardevolle sessie waar ik veel aan heb gehad.",
      author: "Mirjam (45 jaar)"
    },
    {
      quote: "In september heb ik bij Wia een coaching sessie gedaan. Wia is een kundige dame, ze heeft mensenkennis en kan zich goed inleven in de materie/coachvraag. Ze weet de juiste vragen te stellen en houdt goed in de gaten hoe de paarden reageren. Het blijft een wonderlijk fenomeen dat dieren (in dit geval de paarden) onze emoties aanvoelen en vertalen.",
      author: "Eveline (51 jaar)"
    },
    {
      quote: "De paardencoachsessies bij Wia zijn mij goed bevallen. Wia is een lieve, enthousiaste en begripvolle vrouw. Ze praat vol passie over het vak en weet duidelijk waar ze het over heeft. Ze luistert écht naar je en heeft me daardoor tijdens de sessies kunnen helpen en aanvullen waar ik dat nodig had. Ook de paarden zijn stuk voor stuk lief en uniek. Ik voelde me op mijn gemak bij ze. Door de sessies heb ik beter op een rijtje gekregen wat er speelde en waar ik mee zat. Ik ben gaan inzien dat ik daar zelf veel invloed op kan uitvoeren en ben daarin zelfverzekerder geworden. Het was wel ook even heftiger en intensiever dan ik had verwacht, maar al met al ben ik blij met het resultaat. Dat mag er wezen!",
      author: "Anoniem"
    }




  ]

  constructor() { }

  ngOnInit() {
  }

  setActive(i: number, el) {
    if(i < 0) {
      this.activeReview = this.reviews.length - 1;
    } else if (i > this.reviews.length - 1) {
      this.activeReview = 0;
    } else {
      this.activeReview = i;
    }
    console.log(el);


    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
