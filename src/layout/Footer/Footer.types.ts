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

export interface FooterPhones {
  id: number;
  typeOfHelp: string;
  aria: string;
  phone?: string; 
}