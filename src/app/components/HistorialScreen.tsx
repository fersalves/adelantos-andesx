import svgPaths from "@/imports/svg-vuygbdqsz0";
import svgPathsAI from "@/imports/svg-8gbsw7g7nu";

// ── Header ────────────────────────────────────────────────────────────────────

function Header({ onBackClick }: { onBackClick?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          {/* Back button */}
          <div className="content-stretch flex gap-[8px] items-start min-w-[40px] relative shrink-0">
            <div
              onClick={onBackClick}
              className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px] cursor-pointer hover:bg-[#d4e4ff] transition-colors"
            >
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPathsAI.p5e2f8c0} fill="#434CE4" />
                </svg>
              </div>
            </div>
          </div>
          {/* Centered title */}
          <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[16px] text-center text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
            <p className="leading-[20px] overflow-hidden">Adelantos realizados</p>
          </div>
          {/* Spacer to balance back button */}
          <div className="shrink-0 size-[40px]" />
        </div>
      </div>
    </div>
  );
}

// ── Row icons ─────────────────────────────────────────────────────────────────

function DepositIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15.8333 18.125C17.0993 18.125 18.125 17.0993 18.125 15.8333V9.16667C18.125 7.90065 17.0993 6.875 15.8333 6.875H13.3333C12.9882 6.875 12.7083 7.15482 12.7083 7.5C12.7083 7.84518 12.9882 8.125 13.3333 8.125H15.8333C16.409 8.125 16.875 8.59101 16.875 9.16667V15.8333C16.875 16.409 16.409 16.875 15.8333 16.875H4.16667C3.59101 16.875 3.125 16.409 3.125 15.8333V9.16667C3.125 8.59101 3.59101 8.125 4.16667 8.125H6.66667C7.01184 8.125 7.29167 7.84518 7.29167 7.5C7.29167 7.15482 7.01184 6.875 6.66667 6.875H4.16667C2.90066 6.875 1.875 7.90065 1.875 9.16667V15.8333C1.875 17.0993 2.90066 18.125 4.16667 18.125H15.8333Z" fill="#282834" />
        <path d="M5.41667 14.7909C5.76184 14.7909 6.04167 14.511 6.04167 14.1659V10.8325C6.04145 10.4875 5.76171 10.2075 5.41667 10.2075C5.07162 10.2075 4.79189 10.4875 4.79167 10.8325V14.1659C4.79167 14.511 5.07149 14.7909 5.41667 14.7909Z" fill="#282834" />
        <path d="M14.5833 14.7909C14.9285 14.7908 15.2083 14.511 15.2083 14.1659V10.8325C15.2081 10.4876 14.9283 10.2076 14.5833 10.2075C14.2383 10.2075 13.9586 10.4875 13.9583 10.8325V14.1659C13.9583 14.511 14.2382 14.7909 14.5833 14.7909Z" fill="#282834" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8.37972 14.1203C9.27456 15.0151 10.7254 15.015 11.6203 14.1203C12.5152 13.2254 12.5152 11.7746 11.6203 10.8797C10.7254 9.98481 9.27463 9.98481 8.37972 10.8797C7.48501 11.7746 7.48488 13.2254 8.37972 14.1203ZM10.7365 13.2365C10.3297 13.643 9.6702 13.6432 9.26351 13.2365C8.85682 12.8298 8.85695 12.1703 9.26351 11.7635C9.67026 11.3568 10.3297 11.3568 10.7365 11.7635C11.1432 12.1703 11.1432 12.8297 10.7365 13.2365Z" fill="#282834" />
        <path d="M10 1.87419C9.65487 1.87419 9.37505 2.15401 9.37505 2.49919V5.15625L8.77527 4.55648C8.53125 4.31267 8.13551 4.31267 7.89149 4.55648C7.64741 4.80055 7.64741 5.197 7.89149 5.44108L9.55815 7.10775L9.60535 7.15006C9.63898 7.17752 9.67622 7.19821 9.71359 7.21761C9.72899 7.22561 9.74386 7.23449 9.75998 7.24121C9.78274 7.25069 9.80643 7.25651 9.82996 7.26318C9.88431 7.27861 9.94076 7.29085 10 7.29085C10.0626 7.29084 10.1221 7.27787 10.1791 7.26074C10.1998 7.25453 10.2208 7.24961 10.2409 7.24121C10.2517 7.23669 10.2614 7.23003 10.2719 7.22493C10.3327 7.19535 10.3914 7.15828 10.4419 7.10775L12.1086 5.44108C12.3527 5.197 12.3527 4.80055 12.1086 4.55648C11.8646 4.31264 11.4689 4.3127 11.2248 4.55648L10.625 5.15625V2.49919C10.625 2.15404 10.3452 1.87424 10 1.87419Z" fill="#282834" />
      </svg>
    </div>
  );
}

function RecurringPaymentsIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p32474a00} fill="#282834" />
        <path d={svgPaths.p22763600} fill="#282834" />
        <path d={svgPaths.p1985d600} fill="#282834" />
      </svg>
    </div>
  );
}

// ── List row ──────────────────────────────────────────────────────────────────

interface HistorialItem {
  id: string;
  type: "instant" | "programado";
  title: string;
  amount: string;
  date: string;
  time: string;
  showDivider: boolean;
}

const HISTORIAL_ITEMS: HistorialItem[] = [
  { id: "1", type: "instant",    title: "Al instante", amount: "2.000,00",  date: "Hoy",             time: "12h00hs", showDivider: true  },
  { id: "2", type: "programado", title: "Programado",  amount: "10.000,00", date: "20 de diciembre", time: "12h00hs", showDivider: true  },
  { id: "3", type: "instant",    title: "Al instante", amount: "2.000,00",  date: "18 de diciembre", time: "12h00hs", showDivider: true  },
  { id: "4", type: "programado", title: "Programado",  amount: "10.000,00", date: "13 de diciembre", time: "12h00hs", showDivider: false },
];

function HistorialRow({ item }: { item: HistorialItem }) {
  return (
    <>
      {/* Row: transparent bg, 12px vertical padding, 62px total height */}
      <div className="bg-[rgba(255,255,255,0)] flex items-start py-[12px] rounded-[8px] w-full">
        {/* Left spacer: 12px */}
        <div className="shrink-0 w-[12px]" />

        {/* Content: icon + main, gap=8 */}
        <div className="flex flex-[1_0_0] gap-[8px] items-start">
          {/* Icon container: 20×20 */}
          <div className="shrink-0 flex items-center justify-center w-[20px] h-[20px]">
            {item.type === "instant" ? <DepositIcon /> : <RecurringPaymentsIcon />}
          </div>

          {/* Main content: vertical, gap=2 */}
          <div className="flex flex-[1_0_0] flex-col gap-[2px]">
            {/* Title row */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
                <p className="leading-[18px]">{item.title}</p>
              </div>
              <div className="content-stretch flex items-start justify-end relative shrink-0">
                <div className="flex items-baseline gap-[2px]">
                  <span className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#1F8923]" style={{ fontWeight: 600 }}>$</span>
                  <span className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#1F8923]" style={{ fontWeight: 600 }}>{item.amount}</span>
                </div>
              </div>
            </div>

            {/* Description row */}
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "'case'", fontWeight: 400 }}>
                <p className="leading-[16px]">{item.date}</p>
              </div>
              <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[12px] text-right" style={{ fontFeatureSettings: "'case'", fontWeight: 400 }}>
                <p className="leading-[16px]">{item.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right spacer: 12px */}
        <div className="shrink-0 w-[12px]" />
      </div>

      {/* Divider */}
      {item.showDivider && (
        <div className="h-[1px] bg-[#d0d4e6] w-full shrink-0" />
      )}
    </>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ onBackClick }: { onBackClick?: () => void }) {
  return (
    <div className="bg-white relative rounded-[16px] size-full">
      <div className="content-stretch flex flex-col items-start relative rounded-[inherit] size-full" style={{ gap: 32 }}>
        {/* Status bar spacer + header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="h-[52px] shrink-0" />
          <Header onBackClick={onBackClick} />
        </div>

        {/* Empty state content */}
        <div className="flex flex-col items-center gap-[16px] px-[16px] w-full">
          <div className="flex flex-col items-center gap-[8px] text-center">
            <p className="font-['Inter',sans-serif] text-[24px] leading-[30px] text-[#282834]" style={{ fontWeight: 700 }}>
              Aquí encontrarás el historial de tus adelantos
            </p>
            <p className="font-['Inter',sans-serif] text-[14px] leading-[18px] text-[#646587]" style={{ fontWeight: 400 }}>
              Consulta si tienes dinero disponible para comenzar a adelantar.
            </p>
          </div>
          <button
            onClick={onBackClick}
            className="bg-[#3d3df5] text-white font-['Inter',sans-serif] text-[16px] leading-[20px] rounded-[12px] px-[24px] py-[14px] cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Ir a Adelantos
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function HistorialScreen({ onBackClick, isEmpty = false }: { onBackClick?: () => void; isEmpty?: boolean }) {
  if (isEmpty) {
    return <EmptyState onBackClick={onBackClick} />;
  }

  return (
    <div className="bg-white relative rounded-[16px] size-full">
      <div className="content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full" style={{ paddingBottom: 24, gap: 32 }}>
        {/* Status bar spacer + header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="h-[52px] shrink-0" />
          <Header onBackClick={onBackClick} />
        </div>

        {/* List: px=4 */}
        <div className="px-[4px] w-full shrink-0">
          {HISTORIAL_ITEMS.map((item) => (
            <HistorialRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
