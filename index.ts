import http, { IncomingMessage, ServerResponse } from 'http';

// 获取 Northflank 分配的端口，如果没有则默认为 3000
const PORT: string | number = process.env.PORT || 3000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(`收到请求: ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello! The service is running perfectly.\n');
});

// 注意：在云平台上通常需要监听 '0.0.0.0'
server.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 测试服务已启动!`);
  console.log(`正在监听端口: ${PORT}`);
});
