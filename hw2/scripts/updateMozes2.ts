
import { ethers,upgrades } from "hardhat"
import { readAddressList, storeAddressList } from "./helper";

const addressList = readAddressList();
const proxyAddress = addressList['proxy'];

async function main() {
  console.log(proxyAddress," original lock(proxy) address");
  const  Mozes2 = await ethers.getContractFactory("Mozes2hw2");
  console.log("upgrade to Mozes2...");
  const mozes2 = await upgrades.upgradeProxy(proxyAddress, Mozes2);

  const implementation = await upgrades.erc1967.getImplementationAddress(mozes2.address);

  const admin = await upgrades.erc1967.getAdminAddress(mozes2.address);

  console.log(mozes2.address," Mozes2 address(should be the same)")
  console.log(admin," AdminAddress");
  console.log(implementation," ImplementationAddress")

  addressList['proxyV2'] = mozes2.address;
  addressList['adminV2'] = admin;
  addressList['implementationV2'] = implementation;
  storeAddressList(addressList);
  console.log(`Transaction hash: ${mozes2.deployTransaction.hash}`);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})


