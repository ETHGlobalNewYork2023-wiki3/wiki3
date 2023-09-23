// app/layout.tsx
"use client";
import "./globals.css";
import { polygonMumbai, polygon } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { LensProvider, LensConfig, production, development } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  // [polygonMumbai, polygon],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      options: {
        shimDisconnect: false,
      },
    }),
  ],
});

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  // environment: production,
  environment: development,
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <LensProvider config={lensConfig}>
          <QueryClientProvider client={queryClient}>
            <body>{children}</body>
          </QueryClientProvider>
        </LensProvider>
      </WagmiConfig>
    </html>
  );
}