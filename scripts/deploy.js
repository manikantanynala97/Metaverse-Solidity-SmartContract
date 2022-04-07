const {ethers} = require("hardhat");


async function main()
{

    const landContract = await ethers.getContractFactory("Land");
    const deployedlandContract = await landContract.deploy("Metaverse","META");
    await deployedlandContract.deployed();

    console.log("Land Contract Address:",deployedlandContract.address);

}
 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0)).catch((error) => {console.error(error);process.exit(1);});
