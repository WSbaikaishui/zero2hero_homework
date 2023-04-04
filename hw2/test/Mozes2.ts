// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("mozes2", function () {
  let mozes2:Contract;

  beforeEach(async function () {
    const Mozes2 = await ethers.getContractFactory("Mozes2hw2");
    mozes2 = await Mozes2.deploy();
    await mozes2.deployed();
  })

  it("should get previously stored value", async function () {
    await mozes2.setNumber(3);
    expect(await mozes2.getNumber()).to.equal(BigNumber.from('6'));

    await mozes2.setNumber(5);
    expect(await mozes2.getNumber()).to.equal(BigNumber.from('10'));
  });
  const name="Mozes0559";
  it("should be the name we set, Mozes0559", async function () {
    expect(await mozes2.getConstant()).to.equal(name);
  })
})