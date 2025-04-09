// import * as websocket from 'websocket'
// import * as kaspa from 'kaspa';
// globalThis.WebSocket = require('websocket').w3cwebsocket; // W3C WebSocket module shim
const kaspa = require('@thanhlq/kaspa');
const { parseArgs } = require('./utils.js');
const {
    RpcClient,
    Resolver,
} = kaspa;

// @ts-ignore
// globalThis.WebSocket = websocket.w3cwebsocket;
//
// kaspa.initConsolePanicHook();

const {
    networkId,
    encoding,
    address,
} = parseArgs();

(async () => {

    const rpc = new RpcClient({
      // url: "grpc-mainnet-kaspa-fullnode.forbole.com:443",
        // url : "grpc://grpc-testnet-kaspa-fullnode.forbole.com",
        // url : "grpc-testnet-kaspa-fullnode.forbole.com",
        // encoding,
        resolver: new Resolver(),
        networkId
    });
    console.log(`Resolving RPC endpoint...`);
    await rpc.connect();
    console.log(`Connecting to ${rpc.url}`)

    const info = await rpc.getBlockDagInfo();
    console.log("GetBlockDagInfo response:", info);

    const balc = await rpc.getBalanceByAddress({address: "kaspatest:qz5pk9rzdsum3kjw3q95qu8s9ckvz7dmg0dww5gyn3n8h2ujzyu2swz6rfkgc"})
    console.log("getBalanceByAddress response:", balc);

    await rpc.disconnect();
    console.log("disconnected, bye!");
})();
