export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
}

// Параметры запроса
export type RequestParams<ReqT> = {
  method: HTTPMethod;
  endpoint: string;
  headers: Record<string, string>;

  data: ReqT;
};

// Перечисление статусов ответа
export enum StatusHTTP {
  UNEXPECTED_ERROR = "UNEXPECTED_ERROR",
}

// Ответ API
export type ApiResponse<SuccessT, ErrorT> =
  | {
      success: true;
      data: SuccessT;
      status: number;
    }
  | {
      success: false;
      data: ErrorT;
      status: number;
    }
  | {
      success: false;
      status: StatusHTTP;
      data: any;
    };

export interface IApiStore {
  readonly baseUrl: string;

  request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>>;
}
