import request from '@/utils/request'

export function login(callsign, password) {
  return request({
    url: '/api/crew/authentication',
    method: 'get',
    params: {
      callsign,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/api/crew/authorisation',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/crew/logout',
    method: 'post'
  })
}
