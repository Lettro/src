const scans = {
  "Ethereum Explorer": "https://etherscan.io/address/",
  "Polygon Explorer": "https://polygonscan.com/address/",
  "Solana Explorer": "https://solscan.io/tx/",
  "Cardano Explorer": "https://explorer.cardano.org/en/transaction?id=",
  "Terra Explorer": "https://finder.terra.money/columbus-5/tx/",
  "Arbitrum Explorer": "https://arbiscan.io/address/",
  "Fantom Explorer": "https://ftmscan.com/tx/",
  "OpenSea": "https://opensea.io/assets?search[query]=",
  "DeBank": "https://debank.com/profile/",
  "Zerion": "https://app.zerion.io/",
  "Zapper": "https://zapper.fi/account/",
  "Sudoswap": "https://sudoswap.xyz/#/browse/buy/",
  "Bitcoin Explorer": "https://www.blockchain.com/btc/tx/",
  "Binance Smart Chain Explorer": "https://bscscan.com/token/",
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
