// Original file: investAPI/src/docs/contracts/common.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../../../google/protobuf/Timestamp';

export interface Ping {
  'time'?: (_google_protobuf_Timestamp | null);
  'streamId'?: (string);
  'pingRequestTime'?: (_google_protobuf_Timestamp | null);
  '_pingRequestTime'?: "pingRequestTime";
}

export interface Ping__Output {
  'time': (_google_protobuf_Timestamp__Output | null);
  'streamId': (string);
  'pingRequestTime'?: (_google_protobuf_Timestamp__Output | null);
  '_pingRequestTime': "pingRequestTime";
}
