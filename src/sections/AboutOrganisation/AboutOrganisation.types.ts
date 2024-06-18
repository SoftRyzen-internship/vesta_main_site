export interface OrganizationAttributes {
    date: string;
    help_psyhologist: number;
    legal_support: number;
    request_psychologist: number;
    text: string;
  }
  
  export interface OrganizationData {
    attributes: OrganizationAttributes;
  }
  
  export interface OrganizationResponse {
    organization: {
      data: OrganizationData;
    };
  }
  
  export interface AboutOrganisationHelps  {
    id: number,
    amountOfHelp?: number,
    typeOfHelp:string
  }