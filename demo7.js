 // config/config.default.js
 config.alinode = {
  server: 'wss://agentserver.node.aliyun.com:8080',
  appid: '86946',
  secret: 'your secret',
}

exports.alinode = {
  enable: true,
  package: 'egg-alinode',
}

// 脚本配置
"prestart":"nodeinstall --install-alinode 4.6.1",

//控制台执行
sudo npm i egg-alinode

sudo npm start
