import superagent from 'superagent';
import globalConfig from '../config';

/**
 * 封装所有ajax逻辑, 为了配合async/await, 所有ajax请求都要返回promise对象
 */
class Ajax {
  requestWrapper(method, url, { params, data, headers } = {}) {
    console.debug('method=%s, url=%s, params=%o, data=%o, headers=%o',
      method, url, params, data, headers);
    return new Promise((resolve, reject) => {
      const tmp = superagent(method, url);
      // 是否是跨域请求
      if (globalConfig.isCrossDomain()) {
        tmp.withCredentials();
      }
      // 设置全局的超时时间
      if (globalConfig.api.timeout && !isNaN(globalConfig.api.timeout)) {
        tmp.timeout(globalConfig.api.timeout);
      }
      // 默认的Content-Type和Accept
      tmp.set('Content-Type', 'application/json').set('Accept', 'application/json');
      // 如果有自定义的header
      if (headers) {
        tmp.set(headers);
      }
      // url中是否有附加的参数?
      if (params) {
        tmp.query(params);
      }
      // body中发送的数据
      if (data) {
        tmp.send(data);
      }
      // 包装成promise
      tmp.end((err, res) => {
        console.debug('err=%o, res=%o', err, res);
        // 我本来在想, 要不要在这里把错误包装下, 即使请求失败也调用resolve, 这样上层就不用区分"网络请求成功但查询数据失败"和"网络失败"两种情况了
        // 但后来觉得这个ajax方法是很底层的, 在这里包装不合适, 应该让上层业务去包装
        if (res && res.body) {
          resolve(res.body);
        } else {
          reject(err || res);
        }
      });
    });
  }

  get(url, opts = {}) {
    return this.requestWrapper('GET', url, { ...opts });
  }

  post(url, data, opts = {}) {
    return this.requestWrapper('POST', url, { ...opts, data });
  }

  getCurrentUser() {
    return this.get(`${globalConfig.getAPIPath()}${globalConfig.login.getCurrentUser}`);
  }

  login(username, password) {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    return this.post(`${globalConfig.getAPIPath()}${globalConfig.login.validate}`,
      { username, password }, { headers });
  }
}
export default Ajax;
