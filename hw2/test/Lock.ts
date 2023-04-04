// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("lock", function () {
  let lock:Contract;

  beforeEach(async function () {
    const Lock = await ethers.getContractFactory("Lock");
    lock = await Lock.deploy();
    await lock.deployed();
  })

  it("should get previously stored value", async function () {
    await lock.setNumber(42);
    expect(await lock.getNumber()).to.equal(BigNumber.from('42'));

    await lock.setNumber(100);
    expect(await lock.getNumber()).to.equal(BigNumber.from('100'));
  });
  const name="Name: Mozes";
  it("should be the name we set, Mozes", async function () {
    expect(await lock.getConstant()).to.equal(name);
  })
})