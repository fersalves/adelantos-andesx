import { useState, useRef } from "react";
import svgPaths from "@/imports/svg-h574esv65e";
import { useAdminActions } from "@/app/contexts/AdminContext";

// ── Icons ────────────────────────────────────────────────────────────────────

function FeedbackCautionIcon() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px] relative rounded-[9999px] shrink-0">
      <div className="bg-[#d74009] content-stretch flex items-center justify-center max-h-[20px] max-w-[20px] min-h-[20px] min-w-[20px] relative rounded-[9999px] shrink-0 size-[20px]">
        <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
          <path d="M7.34297 10.9206C7.71038 10.599 8.25582 10.5905 8.63138 10.8971L8.70755 10.9661L8.77591 11.0417C9.09595 11.4345 9.07287 12.0136 8.7069 12.3796C8.31663 12.7697 7.68407 12.77 7.29349 12.3802C6.91874 12.0059 6.90362 11.4087 7.24727 11.0156C7.2613 10.9985 7.27619 10.9815 7.29219 10.9655L7.29284 10.9648C7.30867 10.9491 7.32603 10.9344 7.34297 10.9206Z" fill="white" />
          <path d="M7.99987 3C8.36806 3 8.66654 3.29848 8.66654 3.66667V7.66667C8.66654 8.03486 8.36806 8.33333 7.99987 8.33333C7.6317 8.33331 7.3332 8.03484 7.3332 7.66667V3.66667C7.3332 3.29849 7.6317 3.00002 7.99987 3Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

function FeedbackPositiveIcon() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px] relative rounded-[9999px] shrink-0">
      <div className="bg-[#1f8923] content-stretch flex items-center justify-center max-h-[20px] max-w-[20px] min-h-[20px] min-w-[20px] relative rounded-[9999px] shrink-0 size-[20px]">
        <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
          <path d="M11.5255 4.86616C11.7859 4.60581 12.2085 4.60582 12.4689 4.86616C12.729 5.12648 12.7291 5.54856 12.4689 5.80887L7.14338 11.1344C7.01837 11.2594 6.8488 11.3297 6.67203 11.3297C6.49525 11.3297 6.32569 11.2594 6.20067 11.1344L3.5314 8.46512C3.27108 8.2048 3.27114 7.78277 3.5314 7.52241C3.79175 7.26206 4.21376 7.26206 4.47411 7.52241L6.67138 9.71968L11.5255 4.86616Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M13.22 8.23C13.28 8.08254 13.28 7.91746 13.22 7.77C13.1962 7.71425 13.1623 7.66338 13.12 7.62L9.76 4.24C9.70419 4.18419 9.63793 4.13992 9.56501 4.10971C9.49209 4.07951 9.41393 4.06396 9.335 4.06396C9.25607 4.06396 9.17791 4.07951 9.10499 4.10971C9.03207 4.13992 8.96581 4.18419 8.91 4.24C8.85419 4.29581 8.80992 4.36207 8.77971 4.43499C8.74951 4.50791 8.73396 4.58607 8.73396 4.665C8.73396 4.82441 8.79728 4.97728 8.91 5.09L11.22 7.4H3.33C3.17087 7.4 3.01826 7.46321 2.90574 7.57574C2.79321 7.68826 2.73 7.84087 2.73 8C2.73 8.15913 2.79321 8.31174 2.90574 8.42426C3.01826 8.53679 3.17087 8.6 3.33 8.6H11.22L8.91 10.91C8.79943 11.0238 8.73758 11.1763 8.73758 11.335C8.73758 11.4937 8.79943 11.6462 8.91 11.76C9.02502 11.8683 9.17703 11.9286 9.335 11.9286C9.49297 11.9286 9.64498 11.8683 9.76 11.76L13.09 8.42C13.09 8.42 13.09 8.42 13.09 8.36C13.1398 8.3236 13.1836 8.27975 13.22 8.23Z" fill="#4850e5" />
      </svg>
    </div>
  );
}

function MercadoCreditIcon() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d="M14.4667 8.135C13.6958 8.90667 12.6817 9.2925 11.6675 9.2925C10.6533 9.2925 9.63917 8.9075 8.86751 8.135C7.32334 6.59083 7.32334 4.07917 8.86751 2.535C9.61501 1.78667 10.6092 1.375 11.6675 1.375C12.71 1.375 13.73 1.79833 14.4667 2.535C16.0108 4.07917 16.0108 6.59083 14.4667 8.135ZM11.6675 2.62583C10.9433 2.62583 10.2625 2.9075 9.75084 3.41917C8.69501 4.47583 8.69501 6.195 9.75084 7.25167C10.8075 8.3075 12.5258 8.30833 13.5833 7.25167C14.64 6.195 14.64 4.47583 13.5833 3.41917C13.0792 2.915 12.3808 2.62583 11.6675 2.62583Z" fill="#4850E5" fillRule="evenodd" />
        <path clipRule="evenodd" d="M15.1075 11.8247C15.8567 11.263 16.9158 11.3413 17.575 12.0005C17.9267 12.3505 18.1283 12.8372 18.1283 13.3347C18.1283 13.8313 17.9267 14.318 17.575 14.6697L15.8467 16.398C15.2917 16.9522 14.5925 17.3263 13.8242 17.4805L11.3808 17.9697C11.1258 18.0213 10.8658 18.0463 10.6058 18.0463C10.2817 18.0463 9.95667 18.0063 9.64334 17.928L7.43417 17.3755C7.21751 17.3213 6.99667 17.2938 6.77751 17.2938H6.31001C6.07501 17.7855 5.57751 18.128 4.99751 18.128H3.33001C2.52584 18.128 1.87167 17.4738 1.87167 16.6688V11.6672C1.87167 10.8638 2.52584 10.2088 3.32917 10.208H4.99834C5.69584 10.2097 6.27834 10.7022 6.42167 11.3572L7.00001 10.9713C8.05334 10.2688 9.37167 10.0347 10.6192 10.3438L12.53 10.8222C13.3717 11.0322 13.96 11.7847 13.96 12.653V12.6847L15.1075 11.8247ZM4.99834 16.8788C5.11334 16.8788 5.20667 16.7855 5.20667 16.6697V11.668C5.20667 11.553 5.11334 11.4588 4.99751 11.4588H3.33084C3.21667 11.4588 3.12251 11.553 3.12251 11.668V16.6697C3.12251 16.7855 3.21584 16.8788 3.33084 16.8788H4.99834ZM14.9625 15.5138L16.6908 13.7863C16.81 13.6672 16.8775 13.5022 16.8775 13.3347C16.8775 13.1672 16.8092 13.003 16.6908 12.8847C16.4667 12.6605 16.1083 12.6355 15.8558 12.8247L13.8425 14.3347C13.4442 14.6355 12.9683 14.7938 12.4667 14.7938H10.8333C10.4883 14.7938 10.2083 14.5138 10.2083 14.1688C10.2083 13.8238 10.4883 13.5438 10.8333 13.5438H12.0708C12.2417 13.5438 12.4008 13.478 12.5217 13.3572C12.6408 13.238 12.7092 13.073 12.7092 12.9055V12.653C12.7092 12.3605 12.5108 12.1055 12.2267 12.0347L10.3158 11.5572C9.41084 11.3338 8.45667 11.5022 7.69417 12.0122L6.45667 12.8363V16.0447H6.77834C7.09917 16.0447 7.42251 16.0847 7.73751 16.1638L9.94667 16.7163C10.3325 16.8122 10.745 16.8238 11.135 16.7447L13.5783 16.2555C14.1042 16.1497 14.5825 15.8938 14.9625 15.5138Z" fill="#4850E5" fillRule="evenodd" />
      </svg>
    </div>
  );
}

// ── Header ──────────────────────────────────────────────────────────────────

// titleProgress: 0 = large title visible, 1 = collapsed title fully visible
function Header({ titleProgress }: { titleProgress: number }) {
  const { onHistorialClick } = useAdminActions();
  return (
    <div className="relative shrink-0 w-full">
      {/* Nav row */}
      <div className="relative content-stretch flex items-center justify-between px-[16px] py-[12px] w-full">
        {/* Back button */}
        <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]">
          <div className="relative shrink-0 size-[20px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3fc58580} fill="#434CE4" />
            </svg>
          </div>
        </div>

        {/* Collapsed title — truly centered on the page, truncates right after text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
          style={{
            opacity: titleProgress,
            transform: `translateY(${(1 - titleProgress) * 6}px)`,
          }}
        >
          <p
            className="font-['Inter',sans-serif] text-[16px] leading-[20px] text-[#282834] truncate"
            style={{ fontWeight: 700, maxWidth: 'calc(100% - 224px)' }}
          >
            Cumple los objetivos para poder adelantar
          </p>
        </div>

        {/* Right buttons */}
        <div className="content-stretch flex gap-[8px] items-center">
          <div onClick={onHistorialClick} className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px] cursor-pointer">
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p32602400} fill="#434CE4" />
                <path clipRule="evenodd" d={svgPaths.p171aab00} fill="#434CE4" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]">
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3dc9a500} fill="#434CE4" />
                <path d={svgPaths.p2b034980} fill="#434CE4" />
                <path clipRule="evenodd" d={svgPaths.p38566300} fill="#434CE4" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Requirement row ──────────────────────────────────────────────────────────

function RequirementRow({ passing, text, link }: { passing: boolean; text: string; link?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[12px] relative w-full">
      <div className="shrink-0">
        {passing ? <FeedbackPositiveIcon /> : <FeedbackCautionIcon />}
      </div>
      <div className="flex flex-[1_0_0] flex-col gap-[2px] min-w-px self-center">
        <p className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#282834]" style={{ fontWeight: 400 }}>
          {text}
        </p>
        {link && (
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4850e5] text-[14px]" style={{ fontWeight: 600 }}>
              <p className="leading-[18px]">{link}</p>
            </div>
            <ArrowRightIcon />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────

export function AdminNotAllowed() {
  const [titleProgress, setTitleProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    // Title starts at pt-[116px] + mt-[20px] = 136px from scroll top.
    // Nav bar bottom is at 116px. Transition: 136-116=20px → 136-52=84px (title fully behind status bar).
    const start = 20;
    const end = 84;
    const progress = Math.min(1, Math.max(0, (el.scrollTop - start) / (end - start)));
    setTitleProgress(progress);
  };

  return (
    <div className="bg-white relative rounded-[16px] size-full">
      {/* Unified blur background — single element covering status bar + nav bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-md">
        {/* 52px spacer so Header content sits below the status bar area */}
        <div className="h-[52px] pointer-events-none" />
        <Header titleProgress={titleProgress} />
      </div>

      {/* Scroll container — full size so content passes behind the fixed overlays */}
      <div ref={scrollRef} onScroll={handleScroll} className="size-full overflow-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
        {/* 52px status bar + 64px nav row = 116px offset */}
        <div className="flex flex-col items-start w-full pt-[116px] pb-[200px]">

          {/* Large title — fades out as it scrolls behind the nav */}
          <div
            className="content-stretch flex items-center justify-between px-[16px] mt-[20px] w-full"
            style={{ opacity: 1 - titleProgress }}
          >
            <p className="font-['Inter',sans-serif] text-[24px] leading-[28px] text-[#282834]" style={{ fontWeight: 700 }}>
              Cumple los objetivos para poder adelantar
            </p>
          </div>

          {/* First group: requirements list + info card — 32px below title */}
          <div className="flex flex-col gap-[16px] items-start w-full mt-[32px]">
            {/* Requirements list — rows handle own px-[16px] */}
            <div className="flex flex-col items-start w-full">
              <RequirementRow passing={false} text="Mantener buenas prácticas dentro de la plataforma." link="Entender como mejorar" />
              <div className="h-px bg-[#d0d4e6] mx-[16px] w-[calc(100%-32px)]" />
              <RequirementRow passing={false} text="Estar al día con tus deudas por reclamos o devoluciones." link="Revisar deudas" />
              <div className="h-px bg-[#d0d4e6] mx-[16px] w-[calc(100%-32px)]" />
              <RequirementRow passing={false} text="Vender por lo menos 1 vez al mes durante 3 meses." link="Consultar historial de ventas" />
              <div className="h-px bg-[#d0d4e6] mx-[16px] w-[calc(100%-32px)]" />
              <RequirementRow passing={true} text="Vender $ 10.000.000 en el último mes." />
              <div className="h-px bg-[#d0d4e6] mx-[16px] w-[calc(100%-32px)]" />
              <RequirementRow passing={true} text="Tener buena reputación al vender en Mercado Libre." />
            </div>

            {/* Info card */}
            <div className="bg-[#f4f5f9] rounded-[20px] px-[16px] py-[12px] mx-[16px] w-[calc(100%-32px)]">
              <p className="font-['Inter',sans-serif] text-[12px] leading-[16px] text-[#282834]" style={{ fontWeight: 400 }}>
                Analizamos tus objetivos cada 24 horas y no es necesario que te contactes para habilitar adelantos.
              </p>
            </div>
          </div>

          {/* Crossover: Necesitas más dinero — 48px below first group */}
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-full mt-[48px]">
            <p className="font-['Inter',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#282834] text-[18px] text-ellipsis" style={{ fontFeatureSettings: "'case'", fontWeight: 700 }}>
              ¿Necesitas más dinero?
            </p>
            {/* Card */}
            <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[20px] shrink-0 w-full">
              {/* ListRowSimple */}
              <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[12px] shrink-0 w-full">
                {/* Content: icon + text */}
                <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative">
                  {/* Icon */}
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="relative shrink-0 size-[32px]">
                      <div className="absolute bg-[#e9f1ff] left-0 rounded-[32px] size-[32px] top-0">
                        <MercadoCreditIcon />
                      </div>
                    </div>
                  </div>
                  {/* Text + link */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                    <p className="font-['Inter',sans-serif] leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#252537] text-[14px] text-ellipsis w-full">
                      Obtén hasta $ 1.500.000 y devuélvelo en 7, 14, 21 o 28 días.
                    </p>
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4850e5] text-[14px] text-right" style={{ fontWeight: 600 }}>
                        <p className="leading-[18px]">Obtener Dinero Express</p>
                      </div>
                      <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </div>
              {/* Border overlay */}
              <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
