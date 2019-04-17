import request from '@/utils/request';

export default async function loadMenuList(params) {
  return request('/server/api/', {
    method: 'POST',
    requestType: 'form',
    data: params,
  });
}
