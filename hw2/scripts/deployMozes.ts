
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

async function main() {

  const Mozes = await ethers.getContractFactory("Mozeshw2")
  console.log("Deploying mozes...")
  
  //部署合约  执行3笔交易  部署 代理合约 逻辑合约  proxyadmin合约
  const mozes = await upgrades.deployProxy(Mozes,[42], { initializer: 'initialize' })

  await mozes.deployed();
  console.log(mozes.address," Mozes(proxy) address")

  const admin = await upgrades.erc1967.getAdminAddress(mozes.address);

  console.log(admin," AdminAddress");

  const implementation = await upgrades.erc1967.getImplementationAddress(mozes.address);

  console.log(implementation," ImplementationAddress")

  const addressList = readAddressList();

  addressList['proxy'] = mozes.address;
  addressList['admin'] = admin;
  addressList['implementation'] = implementation;
  storeAddressList(addressList);
  console.log(`Transaction hash: ${mozes.deployTransaction.hash}`);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})