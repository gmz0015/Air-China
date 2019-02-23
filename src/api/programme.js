import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/programme/list',
    method: 'get',
    params: { query }
  })
}

export function fetchProgramme(id) {
  return request({
    url: '/programme/detail',
    method: 'get',
    params: { id }
  })
}
