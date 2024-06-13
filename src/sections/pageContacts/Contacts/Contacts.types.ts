export interface IContactsAttributes {
  legal_support: string;
  psychological_support: string;
  head_organization: string;
  email: string;
}

export interface IDataAttributes {
  attributes: IContactsAttributes;
}

export interface IData {
  data: IDataAttributes;
}

export interface IContactsData {
  contact: IData;
}
