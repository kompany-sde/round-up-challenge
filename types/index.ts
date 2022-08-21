export interface IResponseError {
  errors: [
    {
      message: string;
    }
  ];
  success: boolean;
}

export interface IAmount {
  currency: string;
  minorUnits: number;
}

export enum CURRENCY {
  DEFAULT = 'GBP',
  GBP = 'GBP',
  EUR = 'EUR',
}
