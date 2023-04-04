// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("mozes", function () {
  let mozes:Contract;

  beforeEach(async function () {
    const Mozes = await ethers.getContractFactory("Mozeshw2");
    mozes = await Mozes.deploy();
    await mozes.deployed();
  })

  it("should get previously stored value", async function () {
    await mozes.setNumber(42);
    expect(await mozes.getNumber()).to.equal(BigNumber.from('42'));

    await mozes.setNumber(100);
    expect(await mozes.getNumber()).to.equal(BigNumber.from('100'));
  });
  const name="Mozes";
  it("should be the name we set, Mozes", async function () {
    expect(await mozes.getConstant()).to.equal(name);
  })
})