import { Component, OnInit, ViewChild } from '@angular/core';

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

  cardsData = [
    {
      description: `<p>The Learning Management Systems offers the users the features to design, compile, search and tag various learning resources and undertake customised learning experiences. The Platform offers a knowledge taxonomy in order to map the knowledge pieces existing within the domain of education leadership.
      ShikshaLokam Learner App enables Educational Leaders to consume and create relevant learning resources in an interesting and easy manner. This app is easily accessible and free, and every Educational Leader can make use of this app at their convenient time and learn effectively. The App provides learning content in various formats (like H5P, Audio, Video,PDF, etc).
      </p>`,
      title: "Learning Management Systems",
      logo: "../../../../../assets/images/Bodh_LearnerApp -01.png",
      image: '../../../../../assets/images/LMS.png',
      appName: "BODH",
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.app"
    },
    {
      description: `<p>The Assessment capability on the ShikshaLokam platform allows users to create rubric-driven institutional and individual assessments collaboratively. The data collected through these assessments can be evaluated manually and/or automatically and be visualised through reports and dashboards. 
      Samiksha App equips education leaders to observe and assess; analyse data and generate reports. There are various kinds of Assessments. A leader could assess education institutions such as schools,anganwadi and as well assess individuals of the education system including HMs, teachers and other officials. Samiksha offers a leader to assess through simple observations as well.</p>`,
      title: "Assessment",
      logo: "../../../../../assets/images/_Samiksha APP_Logo.jpg",
      image: '../../../../../assets/images/SAMIKSHA.png',
      appName: "SAMIKSHA",
      imagFirst: true,
      hideStartNow: true,
      link: "https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha"
    },
    {
      description: `<p>The Improvement Plan capability allows users to create and track simple improvement plans for individual and institutional entities. The capability shall allow designating collaborators in projects, assigning mentors to learners and catalyse a learning-by-doing experience captured through reflections and discussion boards.
      Unnati App enables educational leaders to create and track simple improvement plans to run their ecosystem better.Users can divide their plans into tasks and sub-tasks and assign it to required stakeholders. Unnati aims at facilitating the improvement journey of education leaders supported with relevant learning resources and assessment tools. </p>`,
      title: "Improvement Projects",
      logo: "../../../../../assets/images/Unnati logo final-01.png",
      image: '../../../../../assets/images/Unnati.png',
      appName: "UNNATI",
      hideStartNow: true,
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
    console.log(this[refrnce].nativeElement)
    this[refrnce].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
