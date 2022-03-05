const CeloKatzWarriors = artifacts.require("CeloKatzWarriors");

module.exports = function (deployer) {
  deployer.deploy(CeloKatzWarriors, "https://gateway.pinata.cloud/ipfs/QmUrhygMVq4hB6Qgb41L68k4n3dZZtwLVcjjDhPrAzVK6j/");
};
