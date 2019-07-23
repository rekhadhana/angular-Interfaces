import { Injectable } from '@angular/core';
import { AGENCY,AgencyService } from './../interfaces/agency.service';


@Injectable()
export class AllAgenciesService implements AgencyService{
  getAgency():AGENCY[]{
    const agencies:AGENCY[]=[{
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
      agencyName:'Assured Job Cunsultancy',
      agencyType:'Contingency',
      agencyLocation:'Mumbai'
    }
    ];
    return agencies;
  }

  constructor() { }
}
