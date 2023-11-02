"use client";
// pages/profile.tsx
import { useState } from "react";

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
const BadgesCollection = () => {
  const [selectedBadges, setSelectedBadges] = useState<number[]>([]);

  const toggleBadgeSelection = (badgeId: number) => {
    if (selectedBadges.includes(badgeId)) {
      setSelectedBadges(selectedBadges.filter((id) => id !== badgeId));
    } else {
      setSelectedBadges([...selectedBadges, badgeId]);
    }
  };

  return (
    <div className="w-100 h-100 m-2 p-3 bg-slate-200">
      {/* Wall for Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge: Badge) => (
          <div key={badge.id} className="bg-white p-4 rounded shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{badge.name}</h2>
              <input
                type="checkbox"
                checked={selectedBadges.includes(badge.id)}
                onChange={() => toggleBadgeSelection(badge.id)}
              />
            </div>
            <p className="text-sm text-gray-600">{badge.description}</p>
          </div>
        ))}
      </div>
      <div className="w-100 justify-end flex">
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4">
          Save
        </button>
      </div>
    </div>
  );
};

export default BadgesCollection;
