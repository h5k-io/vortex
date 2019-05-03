

const resolverMap = {
    Query: {
        "hello": (obj, args) => 'Hello, ' + args.name + '!',
    },
};

module.exports = resolverMap;
