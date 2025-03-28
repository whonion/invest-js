// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { TradeDirection as _tinkoff_public_invest_api_contract_v1_TradeDirection, TradeDirection__Output as _tinkoff_public_invest_api_contract_v1_TradeDirection__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeDirection';
import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';
import type { TradeSourceType as _tinkoff_public_invest_api_contract_v1_TradeSourceType, TradeSourceType__Output as _tinkoff_public_invest_api_contract_v1_TradeSourceType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/TradeSourceType';
import type { Long } from '@grpc/proto-loader';

export interface Trade {
  'figi'?: (string);
  'direction'?: (_tinkoff_public_invest_api_contract_v1_TradeDirection);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'quantity'?: (number | string | Long);
  'time'?: (_google_protobuf_Timestamp | null);
  'instrumentUid'?: (string);
  'tradeSource'?: (_tinkoff_public_invest_api_contract_v1_TradeSourceType);
}

export interface Trade__Output {
  'figi': (string);
  'direction': (_tinkoff_public_invest_api_contract_v1_TradeDirection__Output);
  'price': (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'quantity': (string);
  'time': (_google_protobuf_Timestamp__Output | null);
  'instrumentUid': (string);
  'tradeSource': (_tinkoff_public_invest_api_contract_v1_TradeSourceType__Output);
}
