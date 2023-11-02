"use client";

import { WalletKitProvider } from "@mysten/wallet-kit";

export default function Providers({ children }: any) {
  return <WalletKitProvider>{children}</WalletKitProvider>;
}
