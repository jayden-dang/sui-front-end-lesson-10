"use client";
// pages/profile.tsx
import { useState } from "react";
import Image from "next/image";

type Badge = {
  id: number;
  name: string;
  description: string;
};

const badges: Badge[] = [
  { id: 1, name: "Badge 1", description: "This is the first badge." },
  { id: 2, name: "Badge 2", description: "This is the second badge." },
  { id: 3, name: "Badge 3", description: "This is the second badge." },
  { id: 4, name: "Badge 4", description: "This is the second badge." },
  // Add more badges as needed
];

const Wall = () => {
  return (
    <div className="w-100 h-100 m-2 p-3 bg-slate-200">
      <h4 className="text-black mb-4">
        <i>
          Expose your success here, you can choose which badges you want to hang
          in the collection menu
        </i>
      </h4>
      {/* Wall for Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge: Badge) => (
          <div key={badge.id} className="bg-white p-4 rounded shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{badge.name}</h2>
            </div>
            <p className="text-sm text-gray-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wall;
