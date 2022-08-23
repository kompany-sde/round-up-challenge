export namespace BANKAPI {
  export const BASE_URL = 'https://api-sandbox.starlingbank.com/';

  export enum USER {
    identity = '/api/v2/identity/individual',
  }

  export enum ACCOUNTS {
    accounts = '/api/v2/accounts',
    balance = '/api/v2/accounts/$accountUid/balance',
  }
  export enum SAVINGS {
    goals = '/api/v2/account/$accountUid/savings-goals',
    transferToGoal = '/api/v2/account/$accountUid/savings-goals/$savingsGoalUid/add-money/$transferUid',
  }
  export enum FEED {
    items = '/api/v2/feed/account/$accountUid/category/$categoryUid/transactions-between',
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
    transferToGoal = '/savings/transfer',
  }

  export enum FEED {
    items = '/feed',
  }
}
