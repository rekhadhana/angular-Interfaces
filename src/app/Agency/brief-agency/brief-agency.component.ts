import { Component, OnInit } from '@angular/core';
import { AGENCY,AgencyService } from './../../interfaces/agency.service';
import{AllAgenciesService} from './../all-agencies.service';


@Component({
  selector: 'app-brief-agency',
  templateUrl: './brief-agency.component.html',
  styleUrls: ['./brief-agency.component.scss'],
  providers:[{provide:AgencyService,useClass:AllAgenciesService}]
})
export class BriefAgencyComponent implements OnInit {
  filteredAgency='';
agencies:AGENCY[]
  constructor(private allagencies:AllAgenciesService) { }

  ngOnInit() {
    this.agencies=this.allagencies.getAgency();
  }
  //data for ng2
  data=[{
    agencyName:'Assured Job Cunsultancy',
    agencyType:'Contingency',
    agencyLocation:'Mumbai'
  },
  {
    agencyName:'Mirum Agency',
    agencyType:'Contingency',
    agencyLocation:'Mumbai'
  },
  {
    agencyName:'Top Hat Consulting',
    agencyType:'Contingency',
    agencyLocation:'Bangalore'
  },
  {
    agencyName:'Thomas Agencies Pvt. Ltd.',
    agencyType:'Retainer',
    agencyLocation:'Hyderabad'
  },
  {
    agencyName:'Elite Consultancy',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },
  {
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },
  {
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },
  {
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },{
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },{
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },{
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },{
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },{
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  },{
    agencyName:'TechVed Solution Pvt. ltd',
    agencyType:'Retainer',
    agencyLocation:'Gurugram'
  }
  ];
//settings


settings={
  columns:{
    agencyName:{
      title:'agencyName'
    },
    agencyType:{
      title:'agencyType'
    },
    agencyLocation:{
      title:'agencyLocation'
    }
  }
}
}
