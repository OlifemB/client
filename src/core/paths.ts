const serverHost = 'localhost'
const serverPort = '5000'
const serverPath =  'http://' + serverHost + ":" + serverPort


export const paths = {
    server: {
        host: serverHost,
        port: serverPort,
        path: serverPath,
        uploads: serverPath + '/uploads'
    },
    pages: {
        dashboard: '/dashboard',
        profile: '/profile',
        auth: '/auth',
        uploads: '/uploads',
    }
}