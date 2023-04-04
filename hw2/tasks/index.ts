import { task } from "hardhat/config";
// import { ethers } from "hardhat";
import { readAddressList } from "../scripts/helper";

task("Mozes", "exchagne with mozes v1").setAction(async (_, hre) => {
  
  //和v1 版本交互，调用的是proxy合约
  const addressList = readAddressList();
  const proxyAddress = addressList['proxy'];
  //链接合约
  const mozes = await hre.ethers.getContractAt("Mozeshw2", proxyAddress);

  //查看当前的value 值
  console.log("当前值: ", await mozes.getNumber());

  //设置一个新的value值
  console.log("设置值为95: ", await mozes.setNumber(95));

  console.log("当前值: ", await mozes.getNumber());
  console.log("constant is : ", await mozes.getConstant());
});


task("Mozes2", "exchagne with mozes v2").setAction(async (_, hre) => {
  
    //和v2 版本交互，调用的是proxy合约
    const addressList = readAddressList();
    const proxyAddress = addressList['proxyV2'];
    //链接合约
    const mozes2 = await hre.ethers.getContractAt("Mozes2hw2", proxyAddress);
  
    //查看当前的value 值
    console.log("当前值: ", await mozes2.getNumber());
  
    //设置一个新的value值
    console.log("设置值为100: ", await mozes2.setNumber(50));
  
    console.log("当前值: ", await mozes2.getNumber());
    console.log("constant is : ", await mozes2.getConstant());
  });