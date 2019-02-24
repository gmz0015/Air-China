import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/module/list',
    method: 'get',
    params: { query }
  })
}

export function fetchModule(id) {
  return request({
    url: '/module/detail',
    method: 'get',
    params: { id }
  })
}
