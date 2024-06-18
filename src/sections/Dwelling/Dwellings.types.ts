export interface DwellingsAttributes {
  id: string,
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