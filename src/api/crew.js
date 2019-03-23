import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/crew/list',
    method: 'get',
    params: { query }
  })
}

export function fetchcrew(callsign) {
  return request({
    url: '/crew/detail',
    method: 'get',
    params: { callsign }
  })
}
