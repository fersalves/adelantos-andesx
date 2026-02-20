import { useState } from "react";
import svgPaths from "@/imports/svg-tb7yuzxr0p";
import { CalendarDay } from "./CalendarDay";

// Função para formatar números com separadores de milhares
function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Mock data para os dias com dinheiro disponível
const aprilDays = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 28, 29];
const mayoDays = [3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 19];

// ... (manter todos os componentes auxiliares do BottomSheetNoModal original)

interface BottomSheetWithSelectionProps {
  onDismiss?: () => void;
  onSelect?: (selectedDays: number[], total: number) => void;
}

export default function BottomSheetWithSelection({ onDismiss, onSelect }: BottomSheetWithSelectionProps) {
  const [startDay, setStartDay] = useState<number | null>(null);
  const [endDay, setEndDay] = useState<number | null>(null);

  const handleDayClick = (day: number) => {
    if (startDay === null) {
      // Primeiro clique - define o início
      setStartDay(day);
      setEndDay(day);
    } else if (startDay !== null && endDay === startDay) {
      // Segundo clique - define o fim
      if (day >= startDay) {
        setEndDay(day);
      } else {
        setEndDay(startDay);
        setStartDay(day);
      }
    } else {
      // Terceiro clique - reinicia
      setStartDay(day);
      setEndDay(day);
    }
  };

  const isDayInRange = (day: number): boolean => {
    if (startDay === null || endDay === null) return false;
    return day >= startDay && day <= endDay;
  };

  const getSelectedTotal = (): number => {
    if (startDay === null || endDay === null) return 0;
    
    let total = 0;
    for (let day = startDay; day <= endDay; day++) {
      if (aprilDays.includes(day)) {
        total += 1000; // Cada dia tem $1000 disponível
      }
    }
    return total;
  };

  const selectedTotal = getSelectedTotal();
  const cost = Math.round(selectedTotal * 0.0324); // 3.24%
  const receive = selectedTotal - cost;
  const hasSelection = startDay !== null && endDay !== null;

  const handleSeleccionar = () => {
    if (hasSelection && onSelect) {
      const selectedDays: number[] = [];
      for (let day = startDay!; day <= endDay!; day++) {
        if (aprilDays.includes(day)) {
          selectedDays.push(day);
        }
      }
      onSelect(selectedDays, selectedTotal);
    }
  };

  // Renderiza os dias de abril
  const renderAprilDays = () => {
    const days = [];
    
    // Semana 1: dias 1-2 (não disponíveis), dias 3-6 (disponíveis)
    const week1 = [
      <Day key="1-1" day={1} available={false} />,
      <Day key="1-2" day={2} available={false} />,
    ];
    for (let d = 3; d <= 6; d++) {
      week1.push(
        <CalendarDay
          key={`1-${d}`}
          day={d}
          amount={999}
          isAvailable={aprilDays.includes(d)}
          isStart={d === startDay}
          isEnd={d === endDay}
          isInRange={isDayInRange(d)}
          onClick={() => handleDayClick(d)}
        />
      );
    }
    days.push(<Semana key="week1">{week1}</Semana>);

    // Semana 2-4...
    // (continuar com o resto das semanas)
    
    return days;
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] size-full" data-name="Bottom sheet no modal">
      {/* Header */}
      <Header1 onDismiss={onDismiss} />
      
      {/* Calendário */}
      <Component2Meses renderDays={renderAprilDays} />
      
      {/* Footer */}
      {hasSelection ? (
        <CuentaWithSelection
          adelantas={selectedTotal}
          costo={cost}
          recibes={receive}
          onSeleccionar={handleSeleccionar}
        />
      ) : (
        <Cuenta />
      )}
    </div>
  );
}

// Placeholder components
function Day({ day, available }: { day: number; available: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]">
      <p className={`css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center w-full ${available ? "text-[#282834]" : "text-[#9c9ebf]"}`}>
        {day}
      </p>
    </div>
  );
}

function Semana({ children }: { children: React.ReactNode }) {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      {children}
    </div>
  );
}

function Header1({ onDismiss }: { onDismiss?: () => void }) {
  return <div>Header placeholder</div>;
}

function Component2Meses({ renderDays }: { renderDays: () => React.ReactNode[] }) {
  return <div>Calendar placeholder</div>;
}

function Cuenta() {
  return <div>Cuenta placeholder</div>;
}

function CuentaWithSelection({
  adelantas,
  costo,
  recibes,
  onSeleccionar,
}: {
  adelantas: number;
  costo: number;
  recibes: number;
  onSeleccionar: () => void;
}) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] shrink-0 w-[360px]">
      {/* Resumo */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {/* Adelantas */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            <p className="css-ew64yg leading-[18px]">Adelantas</p>
          </div>
          <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
            <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">$</p>
            </div>
            <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">{formatNumber(adelantas)}</p>
            </div>
          </div>
        </div>

        {/* Costo */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="flex flex-row items-end self-stretch">
            <div className="content-stretch flex gap-[4px] h-full items-center leading-[0] not-italic relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">Costo 3,24%</p>
              </div>
              {/* Info icon */}
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="7" stroke="#646587" strokeWidth="1.5" fill="none" />
                  <text x="8" y="11" textAnchor="middle" fill="#646587" fontSize="10" fontFamily="Inter">i</text>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0">
            <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">-</p>
            </div>
            <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">$</p>
            </div>
            <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">{formatNumber(costo)}</p>
            </div>
          </div>
        </div>

        {/* Recibes */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            <p className="css-ew64yg leading-[18px]">Recibes</p>
          </div>
          <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
            <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">$</p>
            </div>
            <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">{formatNumber(recibes)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Seleccionar */}
      <div
        onClick={onSeleccionar}
        className="bg-[#434ce4] h-[40px] max-h-[40px] min-h-[40px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#3840d0] transition-colors"
      >
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">Seleccionar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
