"use client";
import React, { useState } from "react";

export default function BudgetSlider() {
  const [minVal, setMinVal] = useState(2500);
  const [maxVal, setMaxVal] = useState(100000);

  const min = 2500;
  const max = 150000;

  const formatPrice = (value) => `₹${value.toLocaleString("en-IN")}`;
  const getPercent = (value) => ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Budget (per person)</h2>
        <span className="text-xl">⌃</span>
      </div>

      <div className="relative h-10">
        {/* Track */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded transform -translate-y-1/2" />

        {/* Active range */}
        <div
          className="absolute h-1 bg-blue-500 rounded top-1/2 transform -translate-y-1/2"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal) - getPercent(minVal)}%`,
          }}
        />

        {/* Range Inputs */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1000);
            setMinVal(value);
          }}
          className="range-thumb"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1000);
            setMaxVal(value);
          }}
          className="range-thumb"
        />
      </div>

      <div className="flex justify-between text-sm text-gray-700 mt-2">
        <span>{formatPrice(minVal)}</span>
        <span>{formatPrice(maxVal)}</span>
      </div>
    </div>
  );
}
