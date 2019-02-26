import Mock from 'mockjs'
import { param2Obj } from './utils'

const List = []
const count = 20

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    title: '@title(5, 10)',
    author: '@name',
    content: '@paragraph',
    'core_module|1-10': ['Core Module #@character(number)@character(number)'],
    'optional_module|1-10': ['Optional Module #@character(number)@character(number)'],
    'status|1': ['Published', 'Draft', 'Deleted']
  }))
}

export default {
  getList: () => {
    return {
      total: List.length,
      items: List
    }
  },
  getProgramme: (config) => {
    const { id } = param2Obj(config.url)
    for (const programme of List) {
      if (programme.id === +id) {
        return {
          items: programme
        }
      }
    }
  }
}
