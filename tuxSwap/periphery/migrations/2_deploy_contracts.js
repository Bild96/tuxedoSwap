const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTRORY_ADDRESS = "0x8c3373a44f1E45fF7335204bdddcB4b6819e17e3";

  if(network === "mainnet"){
    weth = await WETH.at("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  await deployer.deploy(Router, FACTRORY_ADDRESS, weth.address);
};
