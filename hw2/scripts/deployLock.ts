
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

async function main() {

  const Lock = await ethers.getContractFactory("Lock")
  console.log("Deploying lock...")
  
  //部署合约  执行3笔交易  部署 代理合约 逻辑合约  proxyadmin合约
  const lock = await upgrades.deployProxy(Lock,[42], { initializer: 'initialize' })

  await lock.deployed();
  console.log(lock.address," lock(proxy) address")

  const admin = await upgrades.erc1967.getAdminAddress(lock.address);

  console.log(admin," AdminAddress");

  const implementation = await upgrades.erc1967.getImplementationAddress(lock.address);

  console.log(implementation," ImplementationAddress")

  const addressList = readAddressList();

  addressList['proxy'] = lock.address;
  addressList['admin'] = admin;
  addressList['implementation'] = implementation;
  storeAddressList(addressList);

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})