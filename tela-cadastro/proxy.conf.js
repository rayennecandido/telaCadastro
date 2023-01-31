
const PROXY_CONFIG = [
    {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: true,
    LogLevel: 'debug',
    pathRewrite: { '^/api': '' }
}
];

module.exports = PROXY_CONFIG;