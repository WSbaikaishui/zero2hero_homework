// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("lock2", function () {
  let lock2:Contract;

  beforeEach(async function () {
    const Lock2 = await ethers.getContractFactory("Lock2");
    lock2 = await Lock2.deploy();
    await lock2.deployed();
  })

  it("should get previously stored value", async function () {
    await lock2.setNumber(3);
    expect(await lock2.getNumber()).to.equal(BigNumber.from('6'));

    await lock2.setNumber(5);
    expect(await lock2.getNumber()).to.equal(BigNumber.from('10'));
  });
  const name="Name: Mozes0559";
  it("should be the name we set, Mozes0559", async function () {
    expect(await lock2.getConstant()).to.equal(name);
  })
})