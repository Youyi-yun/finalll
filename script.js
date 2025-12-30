let i1 = 0;
let imgArr1 = [
  "https://media.discordapp.net/attachments/1311941604428349442/1424062390416179351/0.jpg?ex=69549eb3&is=69534d33&hm=3f89a858bdbec9ce684d4e0c3c551f26d137d0541da96227aed378ab2d45f2ad&=&format=webp&width=920&height=920",
  "https://media.discordapp.net/attachments/1311941604428349442/1424062390823292968/01.jpg?ex=69549eb3&is=69534d33&hm=20a07f9f42530d3d707b6546be71a2988f22ee877d2b660512248e7c13378363&=&format=webp&width=920&height=920",
  "https://media.discordapp.net/attachments/1455597579453858108/1455597627092631592/HH.png?ex=69554e6d&is=6953fced&hm=280f7ef02771040706402cd92b1afc6ce630474e18f79d2f502246cf6e17eb55&=&format=webp&quality=lossless&width=920&height=920",
  "https://media.discordapp.net/attachments/1455597579453858108/1455597626605965567/H.png?ex=69554e6d&is=6953fced&hm=69f7037ba6d2cf3991de5462dcb98f1c927308ec66c83714f92ecc9c6ad61d6c&=&format=webp&quality=lossless&width=920&height=920",
  "https://media.discordapp.net/attachments/1455597579453858108/1455597629114159196/Qy.png?ex=69554e6e&is=6953fcee&hm=03ec3904e43e342b004a03cdf545ce054f8a09469657455b5e52865e88b39d96&=&format=webp&quality=lossless&width=920&height=920",
  "https://media.discordapp.net/attachments/1455597579453858108/1455597626002243776/C.png?ex=69554e6d&is=6953fced&hm=5a1c25e0b630c43bfc81235a93ec46387a94bc13d58fd13db393b310903e6fb8&=&format=webp&quality=lossless&width=920&height=920",
  "https://media.discordapp.net/attachments/1311941604428349442/1424062393050206238/QH.png?ex=69549eb4&is=69534d34&hm=c2d644102320a952d0ec7dc67b014c8b15b0a3072cc1e15b3df6818e0c6ebf11&=&format=webp&quality=lossless&width=920&height=920"
];
function showImg1() {
  document.getElementById("ico1").src = imgArr1[i1];
  i1 = (i1 + 1) % imgArr1.length;
}

let i2 = 0;
let imgArr2 = [
  "https://media.discordapp.net/attachments/1311941604428349442/1407238613082574888/1143_20250728132236.png?ex=6954b816&is=69536696&hm=f98827f76aaf92811ecae2a77b95dedbcab8dccc2e33900dd4832ab2cc5c8e52&=&format=webp&quality=lossless&width=920&height=920",
  "https://media.discordapp.net/attachments/1311941604428349442/1424062520645390538/yaoo.png?ex=69549ed2&is=69534d52&hm=96096b978874a3668bcedb688a8b3b8c9bf17301a9aa7974d34a8b5bdb5837cb&=&format=webp&quality=lossless&width=920&height=920",
  "https://media.discordapp.net/attachments/1311941604428349442/1407238613846069278/ROOBLOX.png?ex=6954b816&is=69536696&hm=e6e940f194dd0dceded9f362ca00657bb9935b30c09c8d7011fae4e6327561d5&=&format=webp&quality=lossless&width=920&height=920"
];
function showImg2() {
  document.getElementById("ico2").src = imgArr2[i2];
  i2 = (i2 + 1) % imgArr2.length;
}
showImg1();
showImg2();
setInterval(showImg1, 2000);
setInterval(showImg2, 2000);