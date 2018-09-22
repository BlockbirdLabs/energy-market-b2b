const Migrations = artifacts.require('./Migrations.sol');
const EnergyToken = artifacts.require('EnergyToken');
const Market = artifacts.require('./Market.sol');

module.exports = async deployer => {
  deployer.deploy(Market);
  deployer.deploy(EnergyToken, 'Renewable Energy Certificate', 'REC');
  deployer.deploy(Migrations);
};