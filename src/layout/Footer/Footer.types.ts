export interface FooterAttributes {
    email: string;
    head_organization: string; 
    legal_support: string;
    psychological_support: string;
  }
  
  export interface FooterData {
    attributes: FooterAttributes;
  }
  
  export interface FooterOrganizationResponse {
    contact: {
      data: FooterData;
    };
  }