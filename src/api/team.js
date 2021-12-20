import request from '@/utils/request'

export function getTeamList(params) {
  return request({
    url: '/vue-element-admin/team/list',
    method: 'get',
    params
  })
}
