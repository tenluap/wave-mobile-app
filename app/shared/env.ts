let host;
var dev = false

host = "https://api.beliepedia.org:3000/api/";
// host="http://10.2.8.71:3000/api/" 
// host="http://192.168.0.103:3000/api/" 
// host="http://127.0.0.1:3 000/api/" 

import * as store from 'tns-core-modules/application-settings'
import { request } from 'tns-core-modules/http/http';

export var localStorage = store;

export var api = {
  client: { method: "get", url: host + "client" },
  login: { method: "post", url: host + "client/login" },
  logout: { method: "post", url: host + "client/logout" },
  register: { method: "post", url: host + "client" },
  follow: { method: "post", url: host + "follow" },
  unfollow: { method: "delete", url: host + "follow" },
  getForum: { method: "get", url: host + "forum" },
  editForum: { method: "patch", url: host + "forum" },
  forum: { method: "post", url: host + "forum" },
  viewCount: { method: "post", url: host + "forum/viewCount" },
  reply: { method: "post", url: host + "reply" },
  profile: { method: "get", url: host + "profile" },
  comics: { method: "get", url: host + "comic" },

}

export async function refreshProfile() {
  var r = localStorage.getString('userId')
  var profile = await request({
    url: api.profile.url + `?filter={"where":{"userId":"${r}"}}`,
    method: 'get'
  })

  localStorage.setString('profile', JSON.stringify(profile.content.toJSON()[0]))

}
