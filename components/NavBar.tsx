"use client";
import React from "react";
import "./navbar.style.css";
import Link from "next/link";
import { ConnectButton } from "@mysten/wallet-kit";
export default function NavBar() {
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <h2 className="logo">SuiLa.ALPHA</h2>
        <nav>
          <ul>
            <li className="mr-6">
              <Link href="/editorDesktop/">Editor</Link>
            </li>
            <li className="mr-6">
              <Link href="/learnerDesktop/profile/wall">Learner</Link>
            </li>
            <ConnectButton connectText={"Connect Wallet"} />
          </ul>
        </nav>
      </div>
    </div>
  );
}
