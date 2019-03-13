import Mock from 'mockjs'
import { param2Obj } from './utils'

const List = []
const count = 10

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    title: '@title(5, 10)',
    author: '@first @last',
    content: '@paragraph',
    code: '@character(upper)@character(number)@character(number)',
    name: '@title',
    tutor: '@first @last',
    'status|1': ['Published', 'Draft', 'Deleted'],
    'aims|1-4': ['@sentence(1, 3)'],
    'skills|1-4': ['@sentence(1, 2)'],
    'knowledges|1-4': ['@sentence(1, 3)']
  }))
}

export default {
  getList: () => {
    return {
      total: List.length,
      items: List
    }
  },
  getModule: (config) => {
    const { id } = param2Obj(config.url)
    for (const module of List) {
      if (module.id === +id) {
        return {
          items: module
        }
      }
    }
  },
  getModuleByAims: (config) => {
    return {
      items: [List[3], List[7], List[9]]
    }
  }
}
