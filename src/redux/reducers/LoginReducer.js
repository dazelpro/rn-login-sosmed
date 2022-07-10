export default (login = 'NULL', action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        default:
            return login;
    }
};
