# WSHExplorer V2 based off github.com/etherparty/explorer

![WSHExplorer V2 Screenshot](http://i.imgur.com/wgROAS9.png)

##License

The code in this branch is licensed under GPLv3 (see LICENSE file)

Feel free to modify or reuse the code here.

##Reddit

Discuss this project at: [Reddit Page on /r/ethreum](https://www.reddit.com/r/ethereum/comments/511j5a/new_ethereum_block_explorer_heavily_updated/)

##Donations

ETH Address: 0xee298ae561bD7BE6e1040AFf281202E0b0646BA6

BTC Address: 1AGxSzTPkthdNKfY5usVLwKDLk9i6sPTQj

##Installation

`git clone https://github.com/FungBitcoin/explorer.git`

`npm install`

`bower install`

`npm start`

Make sure to install gwsh as well for the WSH explorer to be able to function. Then run:

`gwsh --rpc --rpcaddr localhost --rpcport 8545 --rpcapi "web3,wsh" --rpccorsdomain "http://localhost:8000"`

Then visit http://localhost:8000 in your browser of choice after you npm start the explorer

##Updates since original WSHerpaty/explorer base:

-Regular Expressions completed for Addresses, Block #s, and Transacions IDs (aka Search works great)

-The theme is based off Bootstrap V3 for responsive design.

-You can easily change from a dark or light theme utilizing https://bootswatch.com

-There is a basic API implemented now as well as well as a Wise Blockchain Information page

-Realtime ETH/USD Price Ticker

-Realtime Wise Hashrate

-Address Pages are integrated with Shapeshift to easily send a payment to an address.

-Responsive design

-Fontawesome Icons

-Block Time Averages

-Gas Prices/Limits

-Total/Current Difficulty

-Realtime latest blocks and recent transactions

-Other random blockchain info stats were added

