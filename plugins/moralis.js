import Moralis from "moralis/dist/moralis.min.js";
// serverUrl: process.env.SERVER_URL,
// appId: process.env.APPLICATION_ID,
Moralis.start({
  serverUrl: "https://boztrz4gjhbo.usemoralis.com:2053/server",
  appId: "726EfpZdMYOgnsfXsSEPbiT9O10qNfxRrgs9GsGZ",
});

export default (_, inject) => {
  inject("Moralis", Moralis);
};
