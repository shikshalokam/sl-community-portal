import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  @ViewChild("aboutSl") aboutSl: ElementRef;
  @ViewChild("explore") explore: ElementRef;
  @ViewChild("partners") partners: ElementRef;
  @ViewChild("footer") footer: ElementRef;

  baseUrl = environment.keycloakBaseUrl + '/home';

  cardsData = [
    {
      description: `<p class="_smallScreenText">Bodh enables you to learn new concepts in an interesting and easy way. You can create, curate, or search relevant learning resources that offer a high degree of interaction and cater to 
                  various learning styles. You can learn at own pace and at convenience.</p>`,
      title: "Create personalized and powerful learning experiences",
      logo: "../../../../../assets/images/app1.png",
      image: '../../../../../assets/images/Bodh_LearnerApp -01.png',
      appName: "BODH",
      hideStartNow: true,
      playStoreLogo:true,
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.app"
    },
    {
      description: `<p class="_smallScreenText">Samiksha equips you to create your own framework and assess education institutions such as schools, anganwadi and as well individuals of the education system including HMs, teachers and other officials. You can generate reports, analyse data and draw insights.</p>`,
      title: "Observe, Assess and Analyse to take Informed Decisions",
      logo: "../../../../../assets/images/app2.png",
      image: '../../../../../assets/images/_Samiksha APP_Logo.jpg',
      appName: "SAMIKSHA",
      imagFirst: true,
      hideStartNow: true,
      playStoreLogo:true,
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha"
    },
    {
      description: `<p class="_smallScreenText">Unnati enables you to undertake a set of action projects purposefully with a specific objective in a specific period of time. Education leaders can use Unnati to create projects, invite other people as collaborators, assign timelines, execute and monitor progress.</p>`,
      title: "Create, Collaborate, Execute and Track your own School Improvement",
      logo: "../../../../../assets/images/Unnati logo final-01.png",
      image: '../../../../../assets/images/Unnati logo final-01.png',
      appName: "UNNATI",
      hideStartNow: true,
      playStoreLogo:false,
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.unnati"
    },

  ];

  partnrs = [
    "../../../../../assets/images/1.jpg",
    "../../../../../assets/images/2.png",
    "../../../../../assets/images/3.jpg",
    "../../../../../assets/images/4.png",
    "../../../../../assets/images/5.jpg",
    "../../../../../assets/images/6.png",
    "../../../../../assets/images/7.jpg",
    "../../../../../assets/images/8.png",
    "../../../../../assets/images/9.png",
    "../../../../../assets/images/10.jpg",
    "../../../../../assets/images/11.jpg",
    "../../../../../assets/images/12.png",
    "../../../../../assets/images/13.png",
    "../../../../../assets/images/14.png",
    "../../../../../assets/images/15 sanjhisikhya_logo.jpg",
    "../../../../../assets/images/16.1.jpg",
    "../../../../../assets/images/16.jpeg",
    "../../../../../assets/images/17.jpg",
    "../../../../../assets/images/18.png",
    "../../../../../assets/images/19.png",
    "../../../../../assets/images/20.jpeg",
    "../../../../../assets/images/21.png",
    "../../../../../assets/images/22.jpg",







  ]

  constructor() { }

  ngOnInit() {
  }

  scrollToView(refrnce) {
    console.log(refrnce);
    // console.log(this[refrnce].nativeElement)
    // var topOfElement = document.querySelector(refrnce).offsetTop - 130;
    // window.scroll({ top: topOfElement, behavior: "smooth" });



this[refrnce].nativeElement.scrollIntoView(true);
let scrolledY = window.scrollY;
if(scrolledY){
  refrnce === 'footer' ?  window.scroll(0, scrolledY - 0) : window.scroll(0, scrolledY - 120);
}
    // this[refrnce].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // this[refrnce].nativeElement.scrollTo(0,450);
    // this[refrnce].nativeElement.scroll({
    //   top: 100,
    //   left: 100,
    //   behavior: 'smooth'
    // });// this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;

  }



   
  slides = [
    {img: "../assets/images/1.jpg"},
    {img: "../assets/images/2.jpg"},
    {img: "../assets/images/3.jpg"},
    {img: "../assets/images/4.jpg"},
    {img: "../assets/images/5.jpg"},
    {img: "../assets/images/6.jpg"},
    {img: "../assets/images/7.jpg"},
    {img: "../assets/images/8.jpg"},
    {img: "../assets/images/9.jpg"},
    {img: "../assets/images/10.jpg"},
    {img: "../assets/images/11.jpg"},
    {img: "../assets/images/12.jpg"}
  ];
 
  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  };
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
 
}
