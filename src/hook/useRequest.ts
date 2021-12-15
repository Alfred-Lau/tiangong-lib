import axios from "axios";

export type RequestConfig = {
  method: string;
};

export default function useRequest<T>(
  url: string,
  config: Partial<RequestConfig>
): Promise<any> {
  return Promise.resolve();
}
