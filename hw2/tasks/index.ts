import { task } from "hardhat/config";
// import { ethers } from "hardhat";
import { readAddressList } from "../scripts/helper";

task("Lock", "exchagne with lock v1").setAction(async (_, hre) => {
  
  //和v1 版本交互，调用的是proxy合约
  const addressList = readAddressList();
  const proxyAddress = addressList['proxy'];
  //链接合约
  const lock = await hre.ethers.getContractAt("Lock", proxyAddress);

  //查看当前的value 值
  console.log("当前值: ", await lock.getNumber());

  //设置一个新的value值
  console.log("设置值为95: ", await lock.setNumber(95));

  console.log("当前值: ", await lock.getNumber());
  console.log("constant is : ", await lock.getConstant());
});


task("Lock2", "exchagne with lock v1").setAction(async (_, hre) => {
  
    //和v1 版本交互，调用的是proxy合约
    const addressList = readAddressList();
    const proxyAddress = addressList['proxy'];
    //链接合约
    const lock = await hre.ethers.getContractAt("Lock2", proxyAddress);
  
    //查看当前的value 值
    console.log("当前值: ", await lock.getNumber());
  
    //设置一个新的value值
    console.log("设置值为100: ", await lock.setNumber(50));
  
    console.log("当前值: ", await lock.getNumber());
    console.log("constant is : ", await lock.getConstant());
  });