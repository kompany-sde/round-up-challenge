export namespace BANKAPI {
  export const BASE_URL = 'https://api-sandbox.starlingbank.com/';

  export enum USER {
    name = '/api/v2/account-holder/name',
    accountHolderInfo = '/api/v2/account-holder',
  }

  export enum ACCOUNTS {
    accounts = '/api/v2/accounts',
  }
  export enum SAVINGS {
    goals = '/api/v2/account/$accountUid/savings-goals',
  }
  export enum FEED {
    items = '/api/v2/feed/account/$accountUid/category/$categoryUid',
  }
}

export namespace NEXTAPI {
  export const BASE_URL = '/api';

  export enum USER {
    user = '/user',
  }

  export enum ACCOUNTS {
    accounts = '/accounts',
  }

  export enum SAVINGS {
    goals = '/savings',
  }

  export enum FEED {
    items = '/feed',
  }
}
