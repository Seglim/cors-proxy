const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = 8080;

cors_proxy.createServer({
    originWhitelist: [], // 허용할 도메인 목록을 여기에 추가
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
});
