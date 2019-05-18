let host="http://192.168.0.101:3000/api/"
import * as store from 'tns-core-modules/application-settings'

export var localStorage = store;

export var api = {
client: {method:"get", url:host+"client"},
login: {method:"post", url:host+"client/login"},
logout:{method:"post", url:host+"client/logout"},
register:{method:"post", url:host+"client/"},
follow:{method:"post", url:host+"follow"},
unfollow:{method:"delete", url:host+"follow"},
getForum:{method:"get", url:host+"forum"},
editForum:{method:"patch", url:host+"forum"},
forum:{method:"post", url:host+"forum"},
viewCount:{method:"patch", url:host+"forum/viewCount"},
reply:{method:"post", url:host+"reply"},
profile:{method:"get", url:host+"profile"},

}

