async function main() {
  const SchfiftyFiveCoin = await ethers.getContractFactory("SchfiftyFiveCoin");
  const schfiftyfivecoin = await SchfiftyFiveCoin.deploy();

  console.log("SchfiftyFiveCoin deployed to:", schfiftyfivecoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });