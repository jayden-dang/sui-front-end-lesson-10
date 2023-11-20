"use client";
import React from "react";
import "./navbar.style.css";
import { ConnectButton } from "@mysten/wallet-kit";
export default function NavBar() {
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <h2 className="logo">VBI Academy</h2>
        <nav>
          <ul>
            <ConnectButton connectText={"Connect Wallet"} />
          </ul>
        </nav>
      </div>
    </div>
  );
}
