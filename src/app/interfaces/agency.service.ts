import { AGENCY } from './agency.service';
import { Injectable } from '@angular/core';

export interface AGENCY{
  agencyName:string;
  agencyType:string;
  agencyLocation:string;
}

@Injectable({
  providedIn: 'root'
})
export abstract class AgencyService {
    abstract getAgency():AGENCY[];
    
  constructor() { }
}
