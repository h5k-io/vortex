
let repositoryData = [
  {
    name: "centos",
  },
  {
    name: "gradle",
  },
];

const resolverMap = {
  Query: {
    repositories: () => repositoryData,
    repository: (obj, args, context, info) => repositoryData.find(
      (element) => args.name == element.name),
  },
  Mutation: {
    createRepository: function(obj, args, context, info) {
      const selector = (element) => args.name == element.name;
      if (repositoryData.find(selector)) {
        throw "Repository already exists"
      }

      const repo = { "name": args.name };
      repositoryData.push(repo);
      return repo;
    },
    deleteRepository: function(obj, args, context, info) {
      const selector = (element) => args.name == element.name;
      const repo = repositoryData.find(selector);
      if (repo != null) {
        repositoryData.splice(repositoryData.findIndex(selector), 1);
      }
      return repo;
    },
  },
};

module.exports = resolverMap;
