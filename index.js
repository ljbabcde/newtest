const http = require('http');

// 云平台会注入 PORT 环境变量，如果没有则回退到 3000
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('🎉 恭喜！极简测试部署成功！你的云平台完全正常。');
});

// 必须监听 0.0.0.0 才能被云平台的网关访问
server.listen(port, '0.0.0.0', () => {
  console.log(`[OK] 极简测试服务已启动，正在监听端口: ${port}`);
});
