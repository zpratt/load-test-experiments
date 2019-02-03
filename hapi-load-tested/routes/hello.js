module.exports = {
    method: 'GET',
    path: '/hello',
    handler: async () => {
        return {
            hello: "world"
        };
    }
};
