export interface IUser {
  name: IAccountHolderName;
  accountHolderInfo: IAccountHolderInfo;
}

export interface IAccountHolderInfo {
  accountHolderUid: string;
  accountHolderType: 'NDIVIDUAL' | 'BUSINESS' | 'SOLE_TRADER' | 'JOINT' | 'BANKING_AS_A_SERVICE';
}

export interface IAccountHolderName {
  accountHolderName: string;
}
