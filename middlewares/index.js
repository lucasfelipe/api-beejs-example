module.exports = {
    session: {
        errorCode: 401,
        failCondition: '!token',
        failAction: { type: 'SHOW_FORM', form: 'login', message: 'NOT AUTHENTICATED' },
    },

    permission: {
        errorCode: 403,
        failCondition: 'Endpoint == null',
        failAction: { type: 'SHOW_ERROR', message: 'NO PERMISSION' },
    }
}