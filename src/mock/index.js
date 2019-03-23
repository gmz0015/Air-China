import Mock from 'mockjs'
import userAPI from './user'
import articleAPI from './article'
import programmeAPI from './programme'
import programmeModuleAPI from './programme_module'
import programmeCoreModuleAPI from './programme_core_module'
import moduleAPI from './module'
import crewAPI from './crew'

// Fix an issue with setting withCredentials = true, cross-domain request lost cookies
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/user\/login/, 'post', userAPI.login)
Mock.mock(/\/user\/info/, 'get', userAPI.getInfo)
Mock.mock(/\/user\/logout/, 'post', userAPI.logout)

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

// programme
Mock.mock(/\/programme\/list/, 'get', programmeAPI.getList)
Mock.mock(/\/programme\/detail/, 'get', programmeAPI.getProgramme)
Mock.mock(/\/programme\/module\/core/, 'get', programmeCoreModuleAPI.getProgrammeModule)
Mock.mock(/\/programme\/module\/optional/, 'get', programmeModuleAPI.getProgrammeModule)

// Module
Mock.mock(/\/module\/list/, 'get', moduleAPI.getList)
Mock.mock(/\/module\/detail/, 'get', moduleAPI.getModule)
Mock.mock(/\/module\/byAim/, 'get', moduleAPI.getModuleByAims)

// Crew
Mock.mock(/\/crew\/list/, 'get', crewAPI.getList)
Mock.mock(/\/crew\/detail/, 'get', crewAPI.getModule)

export default Mock
