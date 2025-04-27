import{l as h,n as v}from"./chunk-2YJXRZ4E.js";import{$a as y,Ca as f,Ga as C,Ma as l,Pa as t,Qa as n,Ra as p,Sa as O,Ta as w,Ua as b,Va as c,W as M,Wa as d,X as u,Y as g,_a as o,ba as x,pa as P,sa as a}from"./chunk-WLAC566R.js";function I(i,s){if(i&1){let e=b();t(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2"),o(4),n(),t(5,"button",4),c("click",function(){u(e);let m=d();return g(m.onClose())}),o(6,"\xD7"),n()(),p(7,"div",5),n()()}if(i&2){let e=d();a(4),y(e.title),a(3),l("innerHTML",e.content,P)}}var _=class i{visible=!1;title="";content=null;close=new x;ngOnChanges(s){s.visible&&(this.visible?document.body.style.overflow="hidden":document.body.style.overflow="")}onClose(){this.close.emit(),document.body.style.overflow=""}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=f({type:i,selectors:[["app-modal-info"]],inputs:{visible:"visible",title:"title",content:"content"},outputs:{close:"close"},features:[M],decls:1,vars:1,consts:[["class","modal-backdrop",4,"ngIf"],[1,"modal-backdrop"],[1,"modal-container"],[1,"modal-header"],[1,"close-button",3,"click"],[1,"modal-body",3,"innerHTML"]],template:function(e,r){e&1&&C(0,I,8,2,"div",0),e&2&&l("ngIf",r.visible)},dependencies:[v,h],styles:[".modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#3339;z-index:1000;display:flex;justify-content:center;align-items:center;padding:clamp(.5rem,1vw,1rem);overflow-y:auto}.modal-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;width:100%;max-width:800px;max-height:90vh;overflow-y:auto;padding:6rem;box-shadow:0 0 20px #0003;animation:_ngcontent-%COMP%_slideFadeIn .3s ease-out;position:relative}.modal-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(1.5rem,3vw,1.8rem);color:#00435e;margin-bottom:clamp(1rem,2vw,2rem)}.modal-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(1.2rem,2vw,1.5rem);color:#333;margin-top:clamp(2rem,4vw,4rem);margin-bottom:clamp(.5rem,1vw,1rem)}.modal-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .modal-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:clamp(1rem,1.2vw,1.1rem);color:#333;margin-bottom:clamp(.5rem,1vw,1rem);line-height:1.6}.modal-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:disc;padding-left:clamp(1rem,2vw,2rem)}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:clamp(1rem,2vw,2rem)}.modal-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{background:none;border:none;font-size:clamp(1.5rem,3vw,1.8rem);color:gray;cursor:pointer;transition:color .2s ease}.modal-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover{color:#00435e}@keyframes _ngcontent-%COMP%_slideFadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 576px){.modal-container[_ngcontent-%COMP%]{max-width:95vw;padding:clamp(2rem,4vw,4rem)}}"]})};function N(i,s){if(i&1){let e=b();O(0),t(1,"app-modal-info",10),c("close",function(){u(e);let m=d();return g(m.closeModal())}),n(),w()}if(i&2){let e=d();a(),l("visible",!0)("title",e.modals[e.selectedModalIndex].title)("content",e.modals[e.selectedModalIndex].content)}}var E=class i{modals=[{title:"Vous \xEAtes une entreprise",content:`
<section class="presentation-mdrecouvrement">
  <p>
    <strong>Le Cabinet MDrecouvrement</strong> accompagne les petites et moyennes entreprises dans la gestion de leurs impay\xE9s clients, en privil\xE9giant une approche amiable, efficace et respectueuse.
    Nous intervenons principalement dans les d\xE9partements du Val-d'Oise (95), de l\u2019Oise (60) ainsi que sur la plateforme de Roissy (93/77), au c\u0153ur d\u2019un tissu \xE9conomique dynamique.
  </p>

  <p>Notre offre s\u2019adresse aux :</p>
  <ul>
    <li>Entreprises du secteur des services</li>
    <li>Artisans</li>
    <li>Professions lib\xE9rales</li>
    <li>Garages</li>
    <li>\xC9tablissements scolaires</li>
    <li>Bailleurs</li>
    <li>Etc...</li>
  </ul>

  <p><strong>Structures locales confront\xE9es \xE0 des retards ou d\xE9fauts de paiement.</strong></p>

  <h3>Ce qui nous distingue :</h3>
  <ul>
    <li><strong>R\xE9activit\xE9 et efficacit\xE9 :</strong> Une prise en charge imm\xE9diate des dossiers pour une r\xE9solution rapide.</li>
    <li><strong>Z\xE9ro risque financier :</strong> Un mod\xE8le de r\xE9mun\xE9ration bas\xE9 sur le succ\xE8s, sans avance de frais pour vos clients.</li>
    <li><strong>Outils digitaux et transparence :</strong> Un suivi en temps r\xE9el des dossiers pour un contr\xF4le total du recouvrement.</li>
  </ul>

  <p><a href="#en-savoir-plus">En savoir plus</a></p>

  <section id="en-savoir-plus">
    <p>
      L\u2019objectif du Cabinet MDrecouvrement est d\u2019accompagner les TPE, PME, garages, \xE9coles priv\xE9es, bailleurs, sous-traitants etc. de notre r\xE9gion dans la r\xE9cup\xE9ration de leurs impay\xE9s, gr\xE2ce \xE0 une solution simple, efficace, rapide et professionnelle avec une d\xE9marche RSE :
    </p>

    <ul>
      <li>D\xE9veloppement durable avec le moins d\u2019impressions possibles</li>
      <li>Politique de recrutement</li>
      <li>D\xE9marche de relances respectueuses des d\xE9biteurs - sans d\xE9t\xE9riorer la relation client</li>
      <li>Une gestion sur mesure adapt\xE9e \xE0 chaque secteur d'activit\xE9</li>
      <li>Une tarification transparente et sans engagement</li>
    </ul>

    <p>
      Le cabinet MDrecouvrement propose un service local, avec des frais de dossiers forfaitaires initiaux de <strong>15\u20AC</strong> afin de couvrir les frais fixes de base (un appel, un SMS, un mail, une lettre RAR et une lettre simple) puis une r\xE9mun\xE9ration de nos services bas\xE9e sur des tarifs uniquement au r\xE9sultat.
    </p>

    <p>
      Nous proposons \xE9galement la gestion ainsi que le suivi des dossiers en contentieux en cas d\u2019\xE9chec de l\u2019amiable \xE0 la demande du client et contre r\xE9mun\xE9ration sp\xE9cifique.
    </p>

    <h3>Notre politique tarifaire et nos atouts :</h3>

    <p><strong>Nos honoraires (hors frais de dossier) ne sont factur\xE9s qu\u2019en cas de succ\xE8s !</strong></p>

    <h4>Recouvrement amiable :</h4>
    <ul>
      <li>Frais de dossier de <strong>15\u20AC HT</strong></li>
      <li><strong>Honoraires :</strong>
        <ul>
          <li>10 % des sommes encaiss\xE9es pour les cr\xE9ances de moins de 6 mois</li>
          <li>15 % pour les cr\xE9ances de plus de 6 mois</li>
        </ul>
      </li>
    </ul>

    <h4>Recouvrement contentieux :</h4>
    <ul>
      <li>Frais de dossier de <strong>15\u20AC HT</strong> (sauf si dossier ouvert initialement en amiable)</li>
      <li>Frais de gestion contentieux de <strong>150\u20AC HT</strong> (obtention du titre ex\xE9cutoire, hors frais de greffe et de commissaire de justice)</li>
      <li><strong>Honoraires :</strong>
        <ul>
          <li>10 % des sommes encaiss\xE9es pour les cr\xE9ances de moins de 6 mois</li>
          <li>15 % des sommes encaiss\xE9es pour les cr\xE9ances de plus de 6 mois</li>
        </ul>
      </li>
    </ul>

    <p><strong>Nos honoraires sont d\xE9duits avant le reversement des montants r\xE9cup\xE9r\xE9s sur les cr\xE9ances et les fonds r\xE9cup\xE9r\xE9s vous sont revers\xE9s sous 48h afin d\u2019optimiser votre tr\xE9sorerie.</strong></p>

    <h4>Passage \xE0 l\u2019adresse du d\xE9biteur (au choix du client) :</h4>
    <ul>
      <li>Forfait <strong>50\u20AC HT</strong> par passage</li>
      <li>Frais kilom\xE9triques pris en charge par le client</li>
    </ul>
  </section>
</section>

      `},{title:"Nos Formations",content:`
<div class="modal-content">
  <h1>MD Recouvrement - Programme Formation</h1>

  <section>
    <h2>\xC9l\xE9ments de contexte</h2>
    <p>\xAB Vendre c\u2019est bien, encaisser c\u2019est mieux ! \xBB. Cette phrase r\xE9sume \xE0 elle seule toute l\u2019importance du m\xE9tier de charg\xE9 de recouvrement. En effet, \xE0 quoi bon envoyer des factures si elles ne sont jamais pay\xE9es \xE0 bonne date et si l\u2019argent ne rentre jamais dans les caisses de l\u2019entreprise ? Le Charg\xE9 de Recouvrement est donc une fonction essentielle qui doit \xEAtre professionnalis\xE9e. Elle demande de r\xE9elles comp\xE9tences pratiques, techniques et op\xE9rationnelles en Droit, en Finance et en N\xE9gociation.</p>
  </section>

  <section>
    <h2>Reconnaissance de la formation</h2>
    <p>La formation \u201Cles outils pour \xEAtre un bon Charg\xE9 de Recouvrement\u201D est une formation avec des contenus exclusivement m\xE9tiers, centr\xE9s sur l\u2019acquisition de savoir-faire op\xE9rationnels, directement applicables.</p>
    <p>Nous nous adressons \xE0 des candidats \xE0 la recherche de comp\xE9tences professionnelles leur permettant de remplir des fonctions financi\xE8res et commerciales dans leur entreprise d\u2019accueil.</p>
  </section>

  <section>
    <h2>Programme de la formation</h2>

    <h3>\xC9l\xE9ments de contexte</h3>
    <p>\xAB Vendre c\u2019est bien, encaisser c\u2019est mieux ! \xBB. Cette phrase r\xE9sume \xE0 elle seule toute l\u2019importance du m\xE9tier de Charg\xE9 de Recouvrement...</p>
    <p>Face \xE0 ces constats, MD Recouvrement a mis en place une formation sp\xE9cifique : <strong>\xAB les outils pour \xEAtre un bon charg\xE9 de recouvrement amiable \xBB</strong></p>

    <ul>
      <li>R\xE9aliser une relance t\xE9l\xE9phonique \xE0 partir d\u2019une balance \xE2g\xE9e</li>
      <li>Prioriser et planifier les t\xE2ches de relance</li>
      <li>Identifier la cause du retard du paiement</li>
      <li>G\xE9rer un portefeuille de relance (profil payeur, huissier)</li>
      <li>Ma\xEEtriser les techniques de n\xE9gociation de recouvrement</li>
      <li>R\xE9daction des documents de recouvrement amiable et pr\xE9contentieux (confirmation-lettre)</li>
      <li>Les nouveaux modes de communication \xE0 disposition</li>
    </ul>
  </section>

  <section>
    <h2>Formations sp\xE9cialis\xE9es en gestion des impay\xE9s</h2>
    <p>Vous faites face \xE0 des factures impay\xE9es mais vous vous sentez d\xE9sempar\xE9 ? Nous proposons des formations couvrant :</p>

    <ul>
      <li><strong>L'anticipation des risques :</strong> identifier les signaux pr\xE9curseurs d'impay\xE9s et mettre en place des strat\xE9gies</li>
      <li><strong>Les m\xE9thodes de relances amiables internes :</strong> techniques efficaces et cordiales</li>
      <li><strong>La pr\xE9paration \xE0 l'externalisation :</strong> choisir le bon prestataire et collaborer efficacement</li>
    </ul>
  </section>

  <section>
    <h2>Pourquoi faire appel \xE0 MD Recouvrement ?</h2>
    <p>Notre cabinet propose des formations personnalis\xE9es de 1 \xE0 3 jours, en pr\xE9sentiel ou \xE0 distance. Que vous souhaitiez vous former ou former vos \xE9quipes, nous vous accompagnons.</p>
  </section>

  <section>
    <h2>Module Gestionnaire de Recouvrement B to C</h2>
    <p><strong>Nombre de jours de formation :</strong> 2 jours</p>
    <p><strong>Tarif :</strong> 1 600\u20AC HT</p>
  </section>
</div>

      `}];selectedModalIndex=null;openModal(s){this.selectedModalIndex=s}closeModal(){this.selectedModalIndex=null}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=f({type:i,selectors:[["app-accueil"]],decls:27,vars:1,consts:[[1,"blog-card"],[1,"meta"],[1,"photo",2,"background-image","url('assets/corpo10.webp')"],[1,"description"],[1,"text"],[1,"read-more"],["href","#",3,"click"],[1,"blog-card","alt"],[1,"photo",2,"background-image","url('assets/learning.webp')"],[4,"ngIf"],[3,"close","visible","title","content"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"div",1),p(2,"div",2),n(),t(3,"div",3)(4,"h1"),o(5,"Vous \xEAtes une entreprise"),n(),t(6,"h2"),o(7,"Vous avez un impay\xE9 ? Confiez-nous votre dossier."),n(),t(8,"p",4),o(9," Le Cabinet MDrecouvrement accompagne les petites et moyennes entreprises dans la gestion de leurs impay\xE9s clients, en privil\xE9giant une approche amiable, efficace et respectueuse. Nous intervenons principalement dans les d\xE9partements du val-d'Oise (95), de l\u2019Oise (60) ainsi que sur la plateforme de Roissy (93/77), au c\u0153ur d\u2019un tissu \xE9conomique dynamique."),n(),t(10,"p",5)(11,"a",6),c("click",function(){return r.openModal(0)}),o(12,"En savoir plus"),n()()()(),t(13,"div",7)(14,"div",1),p(15,"div",8),n(),t(16,"div",3)(17,"h1"),o(18,"Nos Formations"),n(),t(19,"h2"),o(20,"Ma\xEEtrisez le recouvrement amiable gr\xE2ce \xE0 notre programme."),n(),t(21,"p",4),o(22,"La formation \u201Cles outils pour \xEAtre un bon Charg\xE9 de Recouvrement\u201D est une formation avec des contenus exclusivement m\xE9tiers, centr\xE9s sur l\u2019acquisition de savoir-faire op\xE9rationnels, directement applicables. Nous nous adressons \xE0 des candidats \xE0 la recherche de comp\xE9tences professionnelles leur permettant de remplir des fonctions financi\xE8res et commerciales dans leur entreprise d\u2019accueil..."),n(),t(23,"p",5)(24,"a",6),c("click",function(){return r.openModal(1)}),o(25,"En savoir plus"),n()()()(),C(26,N,2,3,"ng-container",9)),e&2&&(a(26),l("ngIf",r.selectedModalIndex!==null))},dependencies:[v,h,_],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{background:#f1f1f1;margin:2rem}.blog-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:1.5rem auto;box-shadow:0 3px 7px -1px #0000004d;margin-bottom:1.6%;background:#fff;line-height:1.45;margin-right:clamp(1rem,5vw,5rem);margin-left:clamp(1rem,5vw,5rem);font-family:Lato,sans-serif;border-radius:15px;overflow:hidden;z-index:0}@media (min-width: 1900px){.blog-card[_ngcontent-%COMP%]{min-height:400px}}@media (min-width: 2200px){.blog-card[_ngcontent-%COMP%]{min-height:500px}}.blog-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.blog-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffc400}.blog-card[_ngcontent-%COMP%]:hover   .photo[_ngcontent-%COMP%]{-webkit-transform:scale(1.15) rotate(2deg);transform:scale(1.15) rotate(2deg)}.blog-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{position:relative;z-index:0;height:200px}.blog-card[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{position:absolute;inset:0;background-size:cover;background-position:center;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{padding:1rem;background:#fff;position:relative;z-index:1}@media (min-width: 1900px){.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:clamp(.875rem,1vw,1rem)}}@media (min-width: 2200px){.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:clamp(1rem,1.2vw,1.1rem)}}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#00435e;line-height:1;margin:0}@media (max-width: 640px){.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(.75rem,1vw,.875rem)}}@media (max-width: 1000px){.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.1rem,1.5vw,1.2rem)}}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem;font-weight:300;text-transform:uppercase;color:#6e6e6e;margin-top:5px}@media (max-width: 640px){.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(.75rem,1vw,.875rem)}}@media (max-width: 1000px){.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(.875rem,1vw,1rem)}}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]{text-align:right}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;color:#fff;font-size:16px;display:inline-block;position:relative;text-decoration:none;background:#33a0ad;padding:5px 15px;border-radius:15px}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:">";padding-right:.2rem;opacity:0;vertical-align:middle;transition:margin .3s,opacity .3s}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{margin-left:5px;opacity:1}.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;margin:1rem 0 0;color:#666368;font-size:13px;font-family:Lato,sans-serif}.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{margin-top:1.25rem}.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type:before{content:"";position:absolute;height:3px;background:#00435e;width:75px;top:-1rem;border-radius:3px}.blog-card[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]{left:0%}@media (min-width: 640px){.blog-card[_ngcontent-%COMP%]{flex-direction:row}.blog-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{flex-basis:40%;height:auto}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex-basis:60%}.blog-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]:before{-webkit-transform:skewX(-3deg);transform:skew(-3deg);content:"";background:#fff;width:30px;position:absolute;left:-10px;top:0;bottom:0;z-index:-1}.blog-card.alt[_ngcontent-%COMP%]{flex-direction:row-reverse}.blog-card.alt[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]:before{left:inherit;right:-10px;-webkit-transform:skew(3deg);transform:skew(3deg)}.blog-card.alt[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{padding-left:25px}.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}}']})};export{E as a};
