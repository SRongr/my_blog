const isServer = process.env.VUE_ENV === 'server'

const Util = {

  handleHttpSuccess (opt) {
    if (opt.res.data.errorCode) {
      if (isServer) {
        throw new Error(`errorCode:${opt.res.data.errorCode} msg:${opt.res.data.text}`)
      } else {
        opt.vm.$toasted.show(opt.res.data.text)
      }
      return false
    }
    return true
  },
  handleHttpError (opt) {
    if (isServer) {
      throw new Error(`errorCode:${opt.errorCode} msg:${opt.msg}`)
    } else {
      if (opt.ignoreDefaultToast) {
        return
      }
      if (opt.msg) {
        opt.vm.$toasted.show(opt.msg)
        return
      }
      opt.vm.$toasted.show('服务繁忙，请稍后再试')
    }
  },

  request (opt) {
    const overall = typeof window !== 'undefined' ? window : global
    const config = {
      method: opt.method || 'get',
      baseURL: opt.baseURL,
      url: opt.url,
      data: opt.data,
      params: opt.params,
    }
    if (opt.headers) {
      config.headers = opt.headers
    }
    opt.vm.$http(config)
    .then((res) => {
      if (!this.handleHttpSuccess({ res: res, vm: opt.vm }) && !opt.ignoreErrorCode) {
        return
      }
      if (opt.done) {
        // done回调里不能有window等客户端属性
        opt.done(res.data.data !== undefined ? res.data.data : res.data)
      }
    })
    .catch((err) => {
      if (err.response) {
        const errorCode = err.response.data.errorCode
        const msg = err.response.data.text || err.response.data.errorMessage
        this.handleHttpError({ vm: opt.vm, msg, errorCode, ignoreDefaultToast: opt.ignoreDefaultToast })
        if (opt.fail) {
          // fail回调里不能有window等客户端属性
          opt.fail(err.response)
        }
      } else {
        this.handleHttpError({ vm: opt.vm })
      }
    })
    .catch(opt.fail)
  },
 
}

export default Util
