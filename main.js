const scans = {
  "Bitcoin Explorer": "https://www.blockchain.com/btc/tx/",
  "Ethereum Explorer": "https://etherscan.io/address/",
  "Binance Smart Chain Explorer": "https://bscscan.com/token/",
  "Polygon Explorer": "https://polygonscan.com/address/",
  "Cardano Explorer": "https://explorer.cardano.org/en/transaction?id=",
  "Terra Explorer": "https://finder.terra.money/columbus-5/tx/",
  "Arbitrum Explorer": "https://arbiscan.io/address/",
  "Fantom Explorer": "https://ftmscan.com/tx/",
  "Solana Explorer": "https://solscan.io/tx/"
};

chrome.contextMenus.create({
  id: "searchAddressOn",
  title: "Search address on",
  contexts: ["selection"]
});

Object.entries(scans).forEach(([scanTitle, scanUrl]) => {
  chrome.contextMenus.create({
    parentId: "searchAddressOn",
    title: scanTitle,
    contexts: ["selection"],
    onclick: info => {
      searchAddressOnScan(scanUrl, info.selectionText);
    }
  });
});

const searchAddressOnScan = (scanUrl, selectedAddress) => {
  chrome.tabs.create({  
    url: scanUrl + selectedAddress
  });
};
