// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionAction as _tinkoff_public_invest_api_contract_v1_SubscriptionAction, SubscriptionAction__Output as _tinkoff_public_invest_api_contract_v1_SubscriptionAction__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionAction';
import type { TradeInstrument as _tinkoff_public_invest_api_contract_v1_TradeInstrument, TradeInstrument__Output as _tinkoff_public_invest_api_contract_v1_TradeInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeInstrument';
import type { TradeSourceType as _tinkoff_public_invest_api_contract_v1_TradeSourceType, TradeSourceType__Output as _tinkoff_public_invest_api_contract_v1_TradeSourceType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeSourceType';

export interface SubscribeTradesRequest {
  'subscriptionAction'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_TradeInstrument)[];
  'tradeSource'?: (_tinkoff_public_invest_api_contract_v1_TradeSourceType);
}

export interface SubscribeTradesRequest__Output {
  'subscriptionAction': (_tinkoff_public_invest_api_contract_v1_SubscriptionAction__Output);
  'instruments': (_tinkoff_public_invest_api_contract_v1_TradeInstrument__Output)[];
  'tradeSource': (_tinkoff_public_invest_api_contract_v1_TradeSourceType__Output);
}
