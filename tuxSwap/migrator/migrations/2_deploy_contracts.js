const TuxedoToken = artifacts.require("TuxedoToken.sol");
const LiquidityMigrator =artifacts.require("LiquidityMigrator.sol");

module.exports = async function (deployer) {
  await deployer.deploy(TuxedoToken);
  const tuxedoToken = await TuxedoToken.Deployed();

  const routerAddress = "";
  const pairAddress = "";
  const routerForkAddress = "";
  const pairForkAddress = "";

  await deployer.deploy(
     LiquidityMigrator,
     routerAddress,
     pairAddress,
     routerForkAddress,
     pairForkAddress,
     tuxedoToken.address
  );
  const LiquidityMigrator = await LiquidityMigrator.deployed();
  await tuxedoToken.setLiquidator(LiquidityMigrator.address);
};
