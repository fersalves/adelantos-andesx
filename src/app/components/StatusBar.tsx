import { useState, useEffect } from "react";

function Wifi() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[17px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <path d="M8.5 1.41667C5.1 1.41667 2.125 2.90417 0 5.24167L8.5 15.5833L17 5.24167C14.875 2.90417 11.9 1.41667 8.5 1.41667Z" fill="#282834" />
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="col-1 ml-[34.78%] mt-0 relative row-1 size-[17px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <path d="M15.5833 1.41667L1.41667 15.5833H15.5833V1.41667V1.41667Z" fill="#282834" />
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="col-1 h-[15px] ml-[38px] mt-px relative row-1 w-[8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 15">
        <path d="M5.5 0H2.5V1.5H1C0.447715 1.5 0 2.00368 0 2.625V13.875C0 14.4963 0.447715 15 1 15H7C7.55228 15 8 14.4963 8 13.875V2.625C8 2.00368 7.55228 1.5 7 1.5H5.5V0Z" fill="#282834" opacity="0.3" />
        <path d="M6.17902e-06 8C-1.48833e-06 8.58333 1.46004e-07 13.3667 1.46004e-07 13.95C1.46004e-07 14.5299 0.447715 15 1 15H7C7.55228 15 8 14.5299 8 13.95C8 13.3667 8 8.58333 8 8H6.17902e-06Z" fill="#282834" />
      </svg>
    </div>
  );
}

function getCurrentTime() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

export function StatusBar({ transparent = false }: { transparent?: boolean }) {
  const [time, setTime] = useState(getCurrentTime);

  useEffect(() => {
    // sincronizar com o início do próximo minuto
    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    const timeout = setTimeout(() => {
      setTime(getCurrentTime());
      const interval = setInterval(() => setTime(getCurrentTime()), 60_000);
      return () => clearInterval(interval);
    }, msToNextMinute);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 right-0 h-[52px] z-50${transparent ? "" : " bg-white"}`}
      data-name="StatusBar overlay"
    >
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between leading-[0] px-[24px] py-[10px] relative size-full">
          <div
            className="flex flex-col font-['Inter',sans-serif] font-medium justify-center relative shrink-0 text-[#282834] text-[14px] tracking-[0.14px]"
            style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss02', 'dlig', 'lnum', 'pnum'" }}
          >
            <p className="leading-[20px]">{time}</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
            <Wifi />
            <Signal />
            <Battery />
          </div>
        </div>
      </div>
    </div>
  );
}
