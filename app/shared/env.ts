let host;
var dev = false

// host = "https://beliepedia.org:8080/api/";
host = "http://localhost:3000/api/"

import * as store from 'tns-core-modules/application-settings'
import { request } from 'tns-core-modules/http/http';

export var localStorage = store;

export var api = {
  client: { method: "get", url: host + "client" },
  login: { method: "post", url: host + "client/login" },
  logout: { method: "post", url: host + "client/logout" },
  register: { method: "post", url: host + "client" },
  follow: { method: "post", url: host + "client/me/follow" },
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
  var profile = await request({
    url: api.client.url + `/me`,
    method: 'get',
    headers: {
      Authorization: localStorage.getString('token')
    }
  })

  localStorage.setString('profile', JSON.stringify(profile.content.toJSON()))

}
