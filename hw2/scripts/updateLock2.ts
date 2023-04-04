
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

const addressList = readAddressList();
const proxyAddress = addressList['proxy'];

async function main() {
  console.log(proxyAddress," original lock(proxy) address");
  const  Lock2 = await ethers.getContractFactory("Lock2");
  console.log("upgrade to Lock2...");
  const lock2 = await upgrades.upgradeProxy(proxyAddress, Lock2);

  const implementation = await upgrades.erc1967.getImplementationAddress(lock2.address);

  const admin = await upgrades.erc1967.getAdminAddress(lock2.address);

  console.log(lock2.address," Lock2 address(should be the same)")
  console.log(admin," AdminAddress");
  console.log(implementation," ImplementationAddress")

  addressList['proxyV2'] = lock2.address;
  addressList['adminV2'] = admin;
  addressList['implementationV2'] = implementation;
  storeAddressList(addressList);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})


