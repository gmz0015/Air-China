import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/crew/allCrew',
    method: 'get',
    params: { query }
  })
}

export function fetchCrew(callsign) {
  return request({
    url: '/api/crew/statistics/query',
    method: 'get',
    params: { callsign }
  })
}
