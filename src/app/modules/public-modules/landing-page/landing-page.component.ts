import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { AuthService } from '../../private-modules/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isLoggedIn: boolean;
  programId;
  assessmentId;
  // links ;
  opened = true;
  pushMode = 'side';
  currentUser;
  logo = " ./assets/shikshalokam.png";
  // baseUrl;
  portalName;
  links = [];
  @ViewChild("aboutSl") aboutSl: ElementRef;
  @ViewChild("explore") explore: ElementRef;
  @ViewChild("partners") partners: ElementRef;
  @ViewChild("footer") footer: ElementRef;

  baseUrl = environment.keycloakBaseUrl + '/home';
  cardsData = [
    {
      description: `<p class="_smallScreenText _helveticaFont">Bodh enables you to learn new concepts in an interesting and easy way. You can create, curate, or search relevant learning resources that offer a high degree of interaction and cater to 
                  various learning styles. You can learn at own pace and at convenience.</p>`,
      title: "Create personalized and powerful learning experiences",
      logo: "../../../../../assets/images/logo1.png",
      image: '../../../../../assets/images/Bodh_LearnerApp -01.png',
      imageText: `<p class="imageText">Learn to Improve</p>`,
      appName: "BODH",
      hideStartNow: true,
      playStoreLogo: true,
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.app"
    },
    {
      description: `<p class="_smallScreenText _helveticaFont">Samiksha equips you to create your own framework and assess education institutions such as schools, anganwadi and as well individuals of the education system including HMs, teachers and other officials. You can generate reports, analyse data and draw insights.</p>`,
      title: "Observe, Assess and Analyse to take Informed Decisions",
      logo: "../../../../../assets/images/logo2.png",
      image: '../../../../../assets/images/samiksha-logo.png',
      imageText: `<p class="imageText">Assess to Improve</p>`,
      appName: "SAMIKSHA",
      imagFirst: true,
      hideStartNow: true,
      playStoreLogo: true,
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha"
    },
    {
      description: `<p class="_smallScreenText _helveticaFont">Unnati enables you to undertake a set of action projects purposefully with a specific objective in a specific period of time. Education leaders can use Unnati to create projects, invite other people as collaborators, assign timelines, execute and monitor progress.</p>`,
      title: "Create, Collaborate, Execute and Track your own School Improvement",
      logo: "../../../../../assets/images/logo3.png",
      image: '../../../../../assets/images/Unnati logo final-01.png',
      imageText: `<p class="imageText">Plan to Improve</p>`,
      appName: "UNNATI",
      hideStartNow: true,
      playStoreLogo: true,
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.unnati"
    },

  ];

  partnrs = [
    {
      img: "../../../../../assets/images/1.jpg",
      link: "http://www.kefindia.org"
    },
    {
      img: "../../../../../assets/images/2.png",
      link: "http://www.mantra4change.com"
    },
    {
      img: "../../../../../assets/images/3.jpg",
      link: "https://edumentum.org/"
    },
    {
      img: "../../../../../assets/images/4.png",
      link: "https://www.adhyayanfoundation.org/"
    },
    {
      img: "../../../../../assets/images/5.jpg",
      link: "https://indiaschoolleaders.org/"
    },
    {
      img: "../../../../../assets/images/6.png",
      link: "https://www.leadershipforequity.org/"
    },
    {
      img: "../../../../../assets/images/7.jpg",
      link: "https://saajha.org/"
    },
    {
      img: "../../../../../assets/images/8.png",
      link: "https://gyanprakash.org/"
    },
    {
      img: "../../../../../assets/images/9.png",
      link: "https://indiaeducationcollective.org/"
    },
    {
      img: "../../../../../assets/images/10.png",
      link: " https://vidhyavidhai.org/"
    },
    {
      img: "../../../../../assets/images/11.jpg",
      link: " https://loopeducation.weebly.com/"
    },
    {
      img: "../../../../../assets/images/12.png",
      link: "https://www.facebook.com/ProjectSamarthya/"
    },
    {
      img: "../../../../../assets/images/13.png",
      link: "https://www.i-saksham.org/"
    },
    {
      img: "../../../../../assets/images/14.png",
      link: "http://www.barefootedu.in/"
    },
    {
      img: "../../../../../assets/images/15 sanjhisikhya_logo.jpg",
      link: "https://www.sanjhisikhiya.org/"
    },
    {
      img: "../../../../../assets/images/16.1.jpg",
      link: "http://www.bhumi.ngo/"
    },
    {
      img: "../../../../../assets/images/16.jpeg",
      link: "https://www.srindia.org/"
    },
    {
      img: "../../../../../assets/images/17.jpg",
      link: "https://upkram.in/"
    },
    {
      img: "../../../../../assets/images/18.png",
      link: "https://www.facebook.com/samaitshala/"
    },
    {
      img: "../../../../../assets/images/19.png",
      link: "http://simpleeducationfoundation.org/"
    },
    {
      img: "../../../../../assets/images/20.jpeg",
      link: "http://ayang.org.in/"
    },
    {
      img: "../../../../../assets/images/21.png",
      link: ""
    },
    {
      img: "../../../../../assets/images/22.jpg",
      link: "https://www.facebook.com/thrivechennai/"
    },







  ]

  constructor(private authService: AuthService, private router: Router) { 
    this.currentUser = this.authService.getCurrentUserDetails();
    this.baseUrl = environment.base_url;
    this.portalName = environment.portal_name;


    if (this.currentUser) {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    console.log('===home page=====');
    console.log('this.currentUser',this.currentUser);
  }

  scrollToView(refrnce) {
    this[refrnce].nativeElement.scrollIntoView(true);
    let scrolledY = window.scrollY;
    if (scrolledY) {
      refrnce === 'footer' ? window.scroll(0, scrolledY - 0) : window.scroll(0, scrolledY - 120);
    }

  }


  slideResourcesConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "centerPadding": "60px",
    "arrows": false,
    "autoplay": true,
    'respondTo': 'window',

    'responsive': [{
      'breakpoint': 1024,
      'settings': {

        'slidesToShow': 1,
        'slidesToScroll': 1,
        'initialSlide': 1,
        'arrows': true,
        dots: true
      }
    }]
  }


  slidePartnersConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "centerPadding": "60px",
    "arrows": false,
    "autoplay": true,
    'respondTo': 'window',
    'responsive': [
      {
        'breakpoint': 600,
        'settings': {

          'slidesToShow': 1,
          'slidesToScroll': 1,
          'initialSlide': 1,
          'arrows': true,
        }
      },
      {
        'breakpoint': 800,
        'settings': {

          'slidesToShow': 2,
          'slidesToScroll': 1,
          'initialSlide': 2,
          'arrows': true,
        }
      }
    ]
  };


  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  slickInit(e) {
    // console.log('slick initialized');
  }

  breakpoint(e) {
    // console.log('breakpoint');
  }

  afterChange(e) {
    // console.log('afterChange');
  }

  beforeChange(e) {
    // console.log('beforeChange');
  }

}
