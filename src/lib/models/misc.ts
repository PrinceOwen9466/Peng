interface RpcInfo {
  error: RpcErrorObject;
}

interface RpcErrorObject {
  code: number;
  data: RpcData;
  message: string;
}

interface RpcData {
  code:    number;
  message: string;
  cause:   null;
}

export interface RpcError {
  info:  RpcInfo;
}