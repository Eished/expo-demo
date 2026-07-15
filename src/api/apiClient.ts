import { apiUrl } from '@/config';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// axios use instance config
class ApiClient<T = any> {
  instance: AxiosInstance;
  constructor(url = apiUrl) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 60000, // 默认超时时间
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.interceptors(); // 统一错误处理
  }

  get = async <R = T>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.get(url, config);
  };

  post = async <R = T>(url: string, data: any, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.post(url, data, config);
  };

  put = async <R = T>(url: string, data?: any): Promise<R> => {
    return this.instance.put(url, data);
  };

  delete = async <R = T>(url: string, config?: AxiosRequestConfig): Promise<R> => {
    return this.instance.delete(url, config);
  };

  async setAuthorization(token?: string) {
    if (!token) {
      throw new Error('Authorization: Bearer token not found');
    }

    this.instance.defaults.headers.common.Authorization = 'Bearer ' + token;
  }

  interceptors() {
    this.instance.interceptors.response.use(
      function (response) {
        return response.data ? response.data : response;
      },
      function (error) {
        if (error.response) {
          return Promise.reject(error.response.data);
        } else if (error.request) {
          // 请求已经发出，但没有收到响应
          return Promise.reject({
            code: -1,
            message: 'Network Error',
          });
        } else {
          // 在设置请求时触发了一些错误
          return Promise.reject({
            code: -2,
            message: error.message,
          });
        }
      },
    );

    this.instance.interceptors.request.use(
      async config => {
        // const token = await auth().currentUser.getIdToken(); // 默认从缓存读取，getIdToken(true) 强制刷新令牌
        // if (!token) {
        //   throw new Error('Authorization: Bearer token not found');
        // }
        // config.headers.Authorization = 'Bearer ' + token;

        // console.log('localToken', token);
        return config;
      },
      error => {
        console.log(error);
        Promise.reject(error);
      },
    );
  }
}

export default ApiClient;

export const Api = new ApiClient();
