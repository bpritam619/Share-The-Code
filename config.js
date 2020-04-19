'use strict'

module.exports = {
    mailer: {
        service: 'Gmail',
        secure:'false',
        auth: {
                user: 'bpritam619@gmail.com',
                pass: 'pritam@1699'
        },
        tls: {
            rejectUnauthorized: false
        }
    },
    dbConnstring: 'mongodb://127.0.0.1:27017/shareTheCode',
    sessionKey: 'ShareTheCode'
}