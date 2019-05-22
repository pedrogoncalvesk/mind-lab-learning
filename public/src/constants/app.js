const appConstant = {
    API_URL: `${process.env.HOST || ''}/api/`,
    ROOT_URL: `${process.env.HOST || ''}/#/`,
    BASE_URL: `${process.env.HOST || ''}`,
    BEARER: 'Bearer',
    TOKEN: 'token',
    USER_FIRST_NAME: 'first_name',
    USER_LAST_NAME: 'last_name',
};

export default appConstant;