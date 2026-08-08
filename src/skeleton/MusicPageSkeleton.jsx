import React from "react";

function MusicPageSkeleton() {
  const pulse = "animate-pulse";
  const bg = "bg-white/10";

  return (
    <div className="h-[100%] w-[100%]">
      <div className="h-[88%] flex pt-[2%] px-[9%]">
        {/* Left: album art placeholder */}
        <div className="h-full w-[60%] flex justify-center items-center">
          <div
            className={`w-[88%] aspect-square max-h-full rounded-lg ${pulse} ${bg}`}
          />
        </div>
        {/* Right: Up next / Lyrics panel */}
        <div className="h-full w-[40%] text-white overflow-hidden flex flex-col">
          {/* Tabs */}
          <div className="flex w-full justify-between mb-1">
            <div className={`h-10 flex-1 max-w-[50%] rounded ${pulse} ${bg}`} />
            <div className={`h-10 flex-1 max-w-[50%] rounded ${pulse} ${bg}`} />
          </div>
          {/* List rows */}
          <div className="flex flex-col gap-2 mt-2 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex gap-4 items-center py-2 px-1"
              >
                <div className={`w-12 h-12 flex-shrink-0 rounded-sm ${pulse} ${bg}`} />
                <div className="flex-1 min-w-0 space-y-2">
                  <div className={`h-4 rounded w-3/4 max-w-[14rem] ${pulse} ${bg}`} />
                  <div className={`h-3 rounded w-1/2 max-w-[10rem] ${pulse} ${bg}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom bar placeholder so layout doesn't jump */}
      <div className="w-full h-[72px] flex-shrink-0" />
    </div>
  );
}

export default MusicPageSkeleton;
