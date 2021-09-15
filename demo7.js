 // config/config.default.js
 config.alinode = {
  server: 'wss://agentserver.node.aliyun.com:8080',
  appid: '86946',
  secret: '1fb502bbe0013d48b37751a941963538d5118aeb',
}

exports.alinode = {
  enable: true,
  package: 'egg-alinode',
}
// sudo npm i egg-alinode
// "prestart":"nodeinstall --install-alinode 4.6.1",
// sudo npm start