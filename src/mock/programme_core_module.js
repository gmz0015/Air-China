import Mock from 'mockjs'

const List = []
const count = 4

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    code: 'COM@character(number)@character(number)@character(number)@character(number)',
    name: '@title(1, 2)',
    tutor: '@first @last',
    content: '@paragraph'
  }))
}

export default {
  getProgrammeModule: (config) => {
    return {
      items: List
    }
  }
}
