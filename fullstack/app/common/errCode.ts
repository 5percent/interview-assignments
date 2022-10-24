export const SUCCESS: string = '0';
export const PARAM_ERROR: string = '1001';

export const NOT_FOUND: string = '5001';

export const DEFAULT_CODE: string = '8001';

interface ErrorMsgMap {
  [ errorCode: string ] : string
}

export const errMsgMap: ErrorMsgMap = {
  [PARAM_ERROR]: '输入参数错误',

  [NOT_FOUND]: '未查询到对应数据',

  [DEFAULT_CODE]: '系统内部错误'
};