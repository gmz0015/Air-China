import request from '@/utils/request'

// TODO: Need to Modify for table data
export function getList(query) {
  return request({
    url: '/table/list',
    method: 'get',
    params: query
  })
}

export function fetchProgramme(id) {
  return request({
    url: '/table/detail',
    method: 'get',
    params: { id }
  })
}
