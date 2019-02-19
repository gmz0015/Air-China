import request from '@/utils/request'

// TODO: Need to Modify for table data
export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
