const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SchfiftyFiveCoin contract", function() {
  it("Deployment should create schfiftyfive coins", async function() {
    const SchfiftyFiveCoin = await ethers.getContractFactory("SchfiftyFiveCoin");

    const hardhatToken = await SchfiftyFiveCoin.deploy();
    const totalSupply = await hardhatToken.totalSupply();
    const decimals = await hardhatToken.decimals()

    expect(totalSupply / 10 ** decimals).to.equal(55);
  });

  it("Deployment should assign the total supply of coins to the owner", async function() {
    const [owner] = await ethers.getSigners();

    const SchfiftyFiveCoin = await ethers.getContractFactory("SchfiftyFiveCoin");

    const hardhatToken = await SchfiftyFiveCoin.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Coin owners should be able to transfer them", async function() {
    const [owner, recipient] = await ethers.getSigners();

    const SchfiftyFiveCoin = await ethers.getContractFactory("SchfiftyFiveCoin");

    const hardhatToken = await SchfiftyFiveCoin.deploy();

    await hardhatToken.transfer(recipient.address, 50);

    expect(await hardhatToken.balanceOf(recipient.address)).to.equal(50);
  });

});

