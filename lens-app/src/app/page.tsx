"use client";
import {
  useWalletLogin,
  useWalletLogout,
  useActiveProfile,
} from "@lens-protocol/react-web";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Authentication() {
  console.log('1')
  const { execute: login, isPending: isLoginPending } = useWalletLogin();
  console.log('2')
  const { execute: logout } = useWalletLogout();
  console.log('3')
  const { data: wallet, loading } = useActiveProfile();
  console.log('4')
  const { isConnected } = useAccount();
  console.log('5')
  const { disconnectAsync } = useDisconnect();
  console.log('6')

  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });
  console.log('7')

  const onLoginClick = async () => {
    console.log('8')
    if (isConnected) {
      await disconnectAsync();
    }
    console.log('9')

    const { connector } = await connectAsync();
    console.log('10')

    if (connector instanceof InjectedConnector) {
      console.log('11')
      const walletClient = await connector.getWalletClient();
      console.log('12')
      await login({
        address: walletClient.account.address,
      });
    }
  };

  console.log('13', loading, wallet)

  return (
    <div className="flex">
      {loading && <p>Loading...</p>}
    
      {!wallet && !loading && (
        <button
          className="mt-2 px-6 py-1 bg-white text-black rounded"
          disabled={isLoginPending}
          onClick={onLoginClick}
        >
          Sign in
        </button>
      )}
      
      {wallet && !loading && (
        <div>
          <h3 className="text-3xl">{wallet.handle}</h3>
          <p>{wallet.bio}</p>
          <button
            onClick={logout}
            className="mt-2 px-6 py-1 bg-white text-black rounded"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
