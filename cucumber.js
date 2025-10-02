module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: [
      "src/support/hooks.ts",
      "src/support/world.ts",
      "src/steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    publishQuiet: true,
    format: ["progress"],
    parallel: 2
  }
};
