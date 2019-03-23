import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/crew/allCrew',
    method: 'get',
    params: { query }
  })
}

export function fetchcrew(callsign) {
  return request({
    url: '/api/crew/detail',
    method: 'get',
    params: { callsign }
  })
}
