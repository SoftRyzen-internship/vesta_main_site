export interface DwellingsAttributes {
  address: string;
  city: string;
  locationLink: string;
  phone: string;
}

export interface DwellingsData {
  locationItem: DwellingsAttributes[];
}

export interface DwellingsResponse {
  location: {
    data: { attributes: DwellingsData };
  };
}