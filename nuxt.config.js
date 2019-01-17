module.exports = {
    router: {
        middleware: 'auth'
    },
    mode: 'spa',
    srcDir: 'src/',
    build: {
        babel: {

        }
    },
    css: [
        '@/styles/styles.scss',
    ],
    build: {
    },
    plugins: [
        '~/plugins/main.js',
    ],
    server: {
        port: 3001,
        host: 'localhost',
        // default: 3000
        // default: localhost
    },
}   