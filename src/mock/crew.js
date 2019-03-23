import Mock from 'mockjs'
import { param2Obj } from './utils'

const List = []
const count = 10

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    callsign: '@integer(0000, 9999)',
    rating: 'F@integer(0,9)',
    'normal|1': [0, 1],
    'dispatch|1': [0, 1],
    'administrator|1': [0, 1],
    'status|1': ['grouded', 'pending', 'pass']
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
