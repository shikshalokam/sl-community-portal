import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../portal-core';
import {CommunityService,  KendraServiceService } from 'shikshalokam';
import { LibraryConfig } from '../library.config';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.scss']
})
export class LearningResourcesComponent implements OnInit {
  filtersData: any;
  resourceData: any;

  cardData = [
    {
      "title": "Recently Added",
      "type": "card",
      "description": "Recently added",
      "imageurl": "https:ssdsada.png",
      "Totalcount": 20,
      "resources": [
        {
          "ownershipType": [
            "createdBy"
          ],
          "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124849500490629121902-latest",
          "subject": "Recently Added",
          "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.ekstep.ecml-archive",
          "variants": {
            "spine": {
              "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959818_do_2124849500490629121902_8.0_spine.ecar",
              "size": 1993
            }
          },
          "editorState": "{\"plugin\":{\"noOfExtPlugins\":5,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"2b2cee7a-a4c8-41a4-9d88-6b77819346d2\",\"selectedPluginObject\":\"ed2ee756-b680-43eb-8e03-bcc971053c05\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
          "objectType": "Content",
          "gradeLevel": [
            "Class 1"
          ],
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1-1_1485252935201.thumb.png",
          "collections": [
            "do_21249552172595609611313"
          ],
          "appId": "staging.diksha.portal",
          "contentEncoding": "gzip",
          "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1524041847659_do_2124849500490629121902.zip",
          "contentType": "Resource",
          "identifier": "do_2124849500490629121902",
          "lastUpdatedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "audience": [
            "Learner"
          ],
          "visibility": "Default",
          "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
          "mediaType": "content",
          "osId": "org.ekstep.quiz.app",
          "graph_id": "domain",
          "nodeType": "DATA_NODE",
          "lastPublishedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "prevState": "Live",
          "concepts": [
            "AI33"
          ],
          "size": 6339,
          "lastPublishedOn": "2018-10-03T08:05:59.515+0000",
          "IL_FUNC_OBJECT_TYPE": "Content",
          "name": "DEMOTESTING",
          "status": "Live",
          "code": "org.sunbird.spI58i",
          "medium": "English",
          "idealScreenSize": "normal",
          "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
          "createdOn": "2018-04-18T08:55:54.035+0000",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2018-10-03T08:05:58.495+0000",
          "SYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T08:06:00.008+0000",
          "creator": "Contentcreator Balasore",
          "createdFor": [
            "0124799708982312960",
            "0124784842112040965"
          ],
          "IL_SYS_NODE_TYPE": "DATA_NODE",
          "os": [
            "All"
          ],
          "pkgVersion": 8,
          "versionKey": "1538553958495",
          "idealScreenDensity": "hdpi",
          "framework": "NCF",
          "s3Key": "ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "lastSubmittedOn": "2018-04-18T08:56:51.072+0000",
          "createdBy": "8d30d16a-7153-4099-bed2-3eb755c521b6",
          "compatibilityLevel": 2,
          "IL_UNIQUE_ID": "do_2124849500490629121902",
          "board": "CBSE",
          "resourceType": "Read",
          "node_id": 103769,
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2124849500490629121902"
        },
        {
          "ownershipType": [
            "createdBy"
          ],
          "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124849500490629121902-latest",
          "subject": "Recently Added",
          "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.ekstep.ecml-archive",
          "variants": {
            "spine": {
              "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959818_do_2124849500490629121902_8.0_spine.ecar",
              "size": 1993
            }
          },
          "editorState": "{\"plugin\":{\"noOfExtPlugins\":5,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"2b2cee7a-a4c8-41a4-9d88-6b77819346d2\",\"selectedPluginObject\":\"ed2ee756-b680-43eb-8e03-bcc971053c05\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
          "objectType": "Content",
          "gradeLevel": [
            "Class 1"
          ],
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1-1_1485252935201.thumb.png",
          "collections": [
            "do_21249552172595609611313"
          ],
          "appId": "staging.diksha.portal",
          "contentEncoding": "gzip",
          "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1524041847659_do_2124849500490629121902.zip",
          "contentType": "Resource",
          "identifier": "do_2124849500490629121902",
          "lastUpdatedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "audience": [
            "Learner"
          ],
          "visibility": "Default",
          "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
          "mediaType": "content",
          "osId": "org.ekstep.quiz.app",
          "graph_id": "domain",
          "nodeType": "DATA_NODE",
          "lastPublishedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "prevState": "Live",
          "concepts": [
            "AI33"
          ],
          "size": 6339,
          "lastPublishedOn": "2018-10-03T08:05:59.515+0000",
          "IL_FUNC_OBJECT_TYPE": "Content",
          "name": "DEMOTESTING",
          "status": "Live",
          "code": "org.sunbird.spI58i",
          "medium": "English",
          "idealScreenSize": "normal",
          "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
          "createdOn": "2018-04-18T08:55:54.035+0000",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2018-10-03T08:05:58.495+0000",
          "SYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T08:06:00.008+0000",
          "creator": "Contentcreator Balasore",
          "createdFor": [
            "0124799708982312960",
            "0124784842112040965"
          ],
          "IL_SYS_NODE_TYPE": "DATA_NODE",
          "os": [
            "All"
          ],
          "pkgVersion": 8,
          "versionKey": "1538553958495",
          "idealScreenDensity": "hdpi",
          "framework": "NCF",
          "s3Key": "ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "lastSubmittedOn": "2018-04-18T08:56:51.072+0000",
          "createdBy": "8d30d16a-7153-4099-bed2-3eb755c521b6",
          "compatibilityLevel": 2,
          "IL_UNIQUE_ID": "do_2124849500490629121902",
          "board": "CBSE",
          "resourceType": "Read",
          "node_id": 103769,
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2124849500490629121902"
        },
        {
          "ownershipType": [
            "createdBy"
          ],
          "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124849500490629121902-latest",
          "subject": "Recently Added",
          "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.ekstep.ecml-archive",
          "variants": {
            "spine": {
              "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959818_do_2124849500490629121902_8.0_spine.ecar",
              "size": 1993
            }
          },
          "editorState": "{\"plugin\":{\"noOfExtPlugins\":5,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"2b2cee7a-a4c8-41a4-9d88-6b77819346d2\",\"selectedPluginObject\":\"ed2ee756-b680-43eb-8e03-bcc971053c05\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
          "objectType": "Content",
          "gradeLevel": [
            "Class 1"
          ],
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1-1_1485252935201.thumb.png",
          "collections": [
            "do_21249552172595609611313"
          ],
          "appId": "staging.diksha.portal",
          "contentEncoding": "gzip",
          "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1524041847659_do_2124849500490629121902.zip",
          "contentType": "Resource",
          "identifier": "do_2124849500490629121902",
          "lastUpdatedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "audience": [
            "Learner"
          ],
          "visibility": "Default",
          "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
          "mediaType": "content",
          "osId": "org.ekstep.quiz.app",
          "graph_id": "domain",
          "nodeType": "DATA_NODE",
          "lastPublishedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "prevState": "Live",
          "concepts": [
            "AI33"
          ],
          "size": 6339,
          "lastPublishedOn": "2018-10-03T08:05:59.515+0000",
          "IL_FUNC_OBJECT_TYPE": "Content",
          "name": "DEMOTESTING",
          "status": "Live",
          "code": "org.sunbird.spI58i",
          "medium": "English",
          "idealScreenSize": "normal",
          "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
          "createdOn": "2018-04-18T08:55:54.035+0000",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2018-10-03T08:05:58.495+0000",
          "SYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T08:06:00.008+0000",
          "creator": "Contentcreator Balasore",
          "createdFor": [
            "0124799708982312960",
            "0124784842112040965"
          ],
          "IL_SYS_NODE_TYPE": "DATA_NODE",
          "os": [
            "All"
          ],
          "pkgVersion": 8,
          "versionKey": "1538553958495",
          "idealScreenDensity": "hdpi",
          "framework": "NCF",
          "s3Key": "ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "lastSubmittedOn": "2018-04-18T08:56:51.072+0000",
          "createdBy": "8d30d16a-7153-4099-bed2-3eb755c521b6",
          "compatibilityLevel": 2,
          "IL_UNIQUE_ID": "do_2124849500490629121902",
          "board": "CBSE",
          "resourceType": "Read",
          "node_id": 103769,
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2124849500490629121902"
        },
      ]
    },
    {
      "title": "Most Popular",
      "type": "card",
      "description": "Most popular",
      "imageurl": "https:ssdsada.png",
      "Totalcount": 20,
      "resources": [
        {
          "ownershipType": [
            "createdBy"
          ],
          "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124849500490629121902-latest",
          "subject": "Most Popular",
          "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.ekstep.ecml-archive",
          "variants": {
            "spine": {
              "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959818_do_2124849500490629121902_8.0_spine.ecar",
              "size": 1993
            }
          },
          "editorState": "{\"plugin\":{\"noOfExtPlugins\":5,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"2b2cee7a-a4c8-41a4-9d88-6b77819346d2\",\"selectedPluginObject\":\"ed2ee756-b680-43eb-8e03-bcc971053c05\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
          "objectType": "Content",
          "gradeLevel": [
            "Class 1"
          ],
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1-1_1485252935201.thumb.png",
          "collections": [
            "do_21249552172595609611313"
          ],
          "appId": "staging.diksha.portal",
          "contentEncoding": "gzip",
          "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1524041847659_do_2124849500490629121902.zip",
          "contentType": "Resource",
          "identifier": "do_2124849500490629121902",
          "lastUpdatedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "audience": [
            "Learner"
          ],
          "visibility": "Default",
          "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
          "mediaType": "content",
          "osId": "org.ekstep.quiz.app",
          "graph_id": "domain",
          "nodeType": "DATA_NODE",
          "lastPublishedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "prevState": "Live",
          "concepts": [
            "AI33"
          ],
          "size": 6339,
          "lastPublishedOn": "2018-10-03T08:05:59.515+0000",
          "IL_FUNC_OBJECT_TYPE": "Content",
          "name": "DEMOTESTING",
          "status": "Live",
          "code": "org.sunbird.spI58i",
          "medium": "English",
          "idealScreenSize": "normal",
          "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
          "createdOn": "2018-04-18T08:55:54.035+0000",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2018-10-03T08:05:58.495+0000",
          "SYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T08:06:00.008+0000",
          "creator": "Contentcreator Balasore",
          "createdFor": [
            "0124799708982312960",
            "0124784842112040965"
          ],
          "IL_SYS_NODE_TYPE": "DATA_NODE",
          "os": [
            "All"
          ],
          "pkgVersion": 8,
          "versionKey": "1538553958495",
          "idealScreenDensity": "hdpi",
          "framework": "NCF",
          "s3Key": "ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "lastSubmittedOn": "2018-04-18T08:56:51.072+0000",
          "createdBy": "8d30d16a-7153-4099-bed2-3eb755c521b6",
          "compatibilityLevel": 2,
          "IL_UNIQUE_ID": "do_2124849500490629121902",
          "board": "CBSE",
          "resourceType": "Read",
          "node_id": 103769,
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2124849500490629121902"
        },
        {
          "ownershipType": [
            "createdBy"
          ],
          "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124849500490629121902-latest",
          "subject": "Most Popular",
          "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "language": [
            "Hindi"
          ],
          "mimeType": "application/vnd.ekstep.ecml-archive",
          "variants": {
            "spine": {
              "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959818_do_2124849500490629121902_8.0_spine.ecar",
              "size": 1993
            }
          },
          "editorState": "{\"plugin\":{\"noOfExtPlugins\":5,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"2b2cee7a-a4c8-41a4-9d88-6b77819346d2\",\"selectedPluginObject\":\"ed2ee756-b680-43eb-8e03-bcc971053c05\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
          "objectType": "Content",
          "gradeLevel": [
            "Class 1"
          ],
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1-1_1485252935201.thumb.png",
          "collections": [
            "do_21249552172595609611313"
          ],
          "appId": "staging.diksha.portal",
          "contentEncoding": "gzip",
          "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1524041847659_do_2124849500490629121902.zip",
          "contentType": "Resource",
          "identifier": "do_2124849500490629121902",
          "lastUpdatedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "audience": [
            "Learner"
          ],
          "visibility": "Default",
          "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
          "mediaType": "content",
          "osId": "org.ekstep.quiz.app",
          "graph_id": "domain",
          "nodeType": "DATA_NODE",
          "lastPublishedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "prevState": "Live",
          "concepts": [
            "AI33"
          ],
          "size": 6339,
          "lastPublishedOn": "2018-10-03T08:05:59.515+0000",
          "IL_FUNC_OBJECT_TYPE": "Content",
          "name": "DEMOTESTING",
          "status": "Live",
          "code": "org.sunbird.spI58i",
          "medium": "English",
          "idealScreenSize": "normal",
          "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
          "createdOn": "2018-04-18T08:55:54.035+0000",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2018-10-03T08:05:58.495+0000",
          "SYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T08:06:00.008+0000",
          "creator": "Contentcreator Balasore",
          "createdFor": [
            "0124799708982312960",
            "0124784842112040965"
          ],
          "IL_SYS_NODE_TYPE": "DATA_NODE",
          "os": [
            "All"
          ],
          "pkgVersion": 8,
          "versionKey": "1538553958495",
          "idealScreenDensity": "hdpi",
          "framework": "NCF",
          "s3Key": "ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "lastSubmittedOn": "2018-04-18T08:56:51.072+0000",
          "createdBy": "8d30d16a-7153-4099-bed2-3eb755c521b6",
          "compatibilityLevel": 2,
          "IL_UNIQUE_ID": "do_2124849500490629121902",
          "board": "CBSE",
          "resourceType": "Read",
          "node_id": 103769,
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2124849500490629121902"
        },
        {
          "ownershipType": [
            "createdBy"
          ],
          "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_2124849500490629121902-latest",
          "subject": "Most Popular",
          "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
          "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "language": [
            "Hindi"
          ],
          "mimeType": "application/vnd.ekstep.ecml-archive",
          "variants": {
            "spine": {
              "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124849500490629121902/demotesting_1538553959818_do_2124849500490629121902_8.0_spine.ecar",
              "size": 1993
            }
          },
          "editorState": "{\"plugin\":{\"noOfExtPlugins\":5,\"extPlugins\":[{\"plugin\":\"org.ekstep.contenteditorfunctions\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.keyboardshortcuts\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.richtext\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.iterator\",\"version\":\"1.0\"},{\"plugin\":\"org.ekstep.navigation\",\"version\":\"1.0\"}]},\"stage\":{\"noOfStages\":2,\"currentStage\":\"2b2cee7a-a4c8-41a4-9d88-6b77819346d2\",\"selectedPluginObject\":\"ed2ee756-b680-43eb-8e03-bcc971053c05\"},\"sidebar\":{\"selectedMenu\":\"settings\"}}",
          "objectType": "Content",
          "gradeLevel": [
            "Class 1"
          ],
          "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1-1_1485252935201.thumb.png",
          "collections": [
            "do_21249552172595609611313"
          ],
          "appId": "staging.diksha.portal",
          "contentEncoding": "gzip",
          "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124849500490629121902/artifact/1524041847659_do_2124849500490629121902.zip",
          "contentType": "Resource",
          "identifier": "do_2124849500490629121902",
          "lastUpdatedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "audience": [
            "Learner"
          ],
          "visibility": "Default",
          "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
          "mediaType": "content",
          "osId": "org.ekstep.quiz.app",
          "graph_id": "domain",
          "nodeType": "DATA_NODE",
          "lastPublishedBy": "2504faf6-a031-4f62-9fa8-543b9fdffa70",
          "prevState": "Live",
          "concepts": [
            "AI33"
          ],
          "size": 6339,
          "lastPublishedOn": "2018-10-03T08:05:59.515+0000",
          "IL_FUNC_OBJECT_TYPE": "Content",
          "name": "DEMOTESTING",
          "status": "Live",
          "code": "org.sunbird.spI58i",
          "medium": "English",
          "idealScreenSize": "normal",
          "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
          "createdOn": "2018-04-18T08:55:54.035+0000",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2018-10-03T08:05:58.495+0000",
          "SYS_INTERNAL_LAST_UPDATED_ON": "2018-10-03T08:06:00.008+0000",
          "creator": "Contentcreator Balasore",
          "createdFor": [
            "0124799708982312960",
            "0124784842112040965"
          ],
          "IL_SYS_NODE_TYPE": "DATA_NODE",
          "os": [
            "All"
          ],
          "pkgVersion": 8,
          "versionKey": "1538553958495",
          "idealScreenDensity": "hdpi",
          "framework": "NCF",
          "s3Key": "ecar_files/do_2124849500490629121902/demotesting_1538553959515_do_2124849500490629121902_8.0.ecar",
          "lastSubmittedOn": "2018-04-18T08:56:51.072+0000",
          "createdBy": "8d30d16a-7153-4099-bed2-3eb755c521b6",
          "compatibilityLevel": 2,
          "IL_UNIQUE_ID": "do_2124849500490629121902",
          "board": "CBSE",
          "resourceType": "Read",
          "node_id": 103769,
          "url": "https://dev.shikshalokam.org/resources/play/content/do_2124849500490629121902"
        },
        
      ]
    }
  ]
  constructor(private libraryService: LibraryService,
    private communityService: CommunityService,
    private kendraServiceService: KendraServiceService) { }

  ngOnInit() {
    this.getFilters();
    this.getLearningResources();
  }


  getFilters() {
    this.communityService.get(environment.base_url + LibraryConfig.filterList).subscribe(data => {
      this.filtersData = data['result'];

    }, error => {

    })
  }


  getLearningResources() {
    this.communityService.get(environment.base_url + LibraryConfig.learningResources).subscribe(data => {
      console.log('getLearningResources', data);
      this.resourceData = data['result'];

    }, error => {

    })
  }

  getSelected(data) {
    console.log('selected filters', data);

  }

}
