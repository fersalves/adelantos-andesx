import { useState } from 'react';
import svgPaths from './svg-ywjeqa8kfw';
import svgPathsInfo from './svg-a44kuo30zz';

// Função para formatar números com separadores de milhares
function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Formata valor para exibição compacta nos dias do calendário
function formatAmount(amount: number): string {
  if (amount >= 1000000) {
    // Milhões: "2 M" ou "2.5 M"
    const val = Math.round(amount / 100000) / 10;
    return `${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)} M`;
  } else if (amount >= 100000) {
    // Centenas de milhar: "111 K", "259 K" (sem decimal)
    return `${Math.round(amount / 1000)} K`;
  } else {
    // Unidades/dezenas de milhar: "1 K" ou "1.1 K"
    const val = Math.round(amount / 100) / 10;
    return `${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)} K`;
  }
}

// Tipo para representar um dia com mês
interface DayWithMonth {
  day: number;
  month: 'mes1' | 'mes2';
}

// Nomes dos meses em espanhol
const MONTH_NAMES_ES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Gera as semanas de um mês (Seg=0 ... Dom=6)
function buildWeeks(year: number, month: number): (number | null)[][] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7; // Mon=0
  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDayOfWeek).fill(null);
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) { weeks.push(week); week = []; }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function AreaTapeable() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] py-[8px] relative shrink-0" data-name="Area tapeable">
      <div className="bg-[#646587] h-[4px] rounded-[9999px] shrink-0 w-[32px]" data-name="Drag indicator" />
    </div>
  );
}

function DragIndicator() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Drag indicator">
      <AreaTapeable />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#282834] text-[20px]" style={{ fontFeatureSettings: "'case'", fontWeight: 700 }}>
        <p className="css-4hzbpn leading-[24px]">Selecciona el día o periodo que quieres adelantar</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[8px] py-[8px] relative w-full">
        <Title />
      </div>
    </div>
  );
}

function Ignore() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Close">
          <path d={svgPaths.p3ead2f80} fill="var(--fill-0, #646587)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DismissButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[8px] shrink-0 size-[32px] cursor-pointer"
      data-name="Dismiss button"
    >
      <Close />
    </div>
  );
}

function Action({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Action">
      <DismissButton onClick={onClick} />
    </div>
  );
}

function Dismiss({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-end pb-[8px] pl-[4px] pt-[4px] relative self-stretch shrink-0" data-name="Dismiss">
      <Action onClick={onClick} />
    </div>
  );
}

function Controls({ onDismiss }: { onDismiss?: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Controls">
      <Content />
      <Ignore />
      <Dismiss onClick={onDismiss} />
    </div>
  );
}

function Header({ onDismiss }: { onDismiss?: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative w-full">
          <Controls onDismiss={onDismiss} />
        </div>
      </div>
    </div>
  );
}

function Header1({ onDismiss }: { onDismiss?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-[360px]" data-name="Header">
      <DragIndicator />
      <Header onDismiss={onDismiss} />
    </div>
  );
}

function Mes({ title }: { title: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Mes">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[12px] pt-[20px] px-[12px] relative w-full">
          <p className="css-ew64yg font-['Inter',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#646587] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function DayLabel({ label }: { label: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        {label}
      </p>
    </div>
  );
}

function DiaSemana() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Dia semana">
      <DayLabel label="LUN" />
      <DayLabel label="MAR" />
      <DayLabel label="MIÉ" />
      <DayLabel label="JUE" />
      <DayLabel label="VIE" />
      <DayLabel label="SÁB" />
      <DayLabel label="DOM" />
    </div>
  );
}

function InfoMes({ title }: { title: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[336px]" data-name="Info mes">
      <Mes title={title} />
      <DiaSemana />
    </div>
  );
}

// Componente genérico para dias não disponíveis
function DayUnavailable({ day }: { day: number }) {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        {day}
      </p>
    </div>
  );
}

// Componente para dias no range mas sem valor (pintado em azul claro)
function DayInRangeNoValue({ day, isStart, isEnd, isInRange }: { day: number; isStart: boolean; isEnd: boolean; isInRange: boolean }) {
  let bgClasses = "";
  let roundingClasses = "";

  if (isStart && isEnd) {
    bgClasses = "bg-[#dee9ff]";
    roundingClasses = "rounded-[8px]";
  } else if (isStart) {
    bgClasses = "bg-[#dee9ff]";
    roundingClasses = "rounded-bl-[8px] rounded-tl-[8px]";
  } else if (isEnd) {
    bgClasses = "bg-[#dee9ff]";
    roundingClasses = "rounded-br-[8px] rounded-tr-[8px]";
  } else if (isInRange) {
    bgClasses = "bg-[#dee9ff]";
  }

  return (
    <div
      className={`content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px] ${bgClasses} ${roundingClasses}`}
      data-name="day"
    >
      <p className="css-4hzbpn font-['Inter',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        {day}
      </p>
    </div>
  );
}

// Componente genérico para dias disponíveis (com interação)
function DayAvailable({ 
  day, 
  amount = 999, 
  isStart, 
  isEnd, 
  isInRange, 
  onClick 
}: { 
  day: number; 
  amount?: number; 
  isStart: boolean; 
  isEnd: boolean; 
  isInRange: boolean; 
  onClick: () => void;
}) {
  let bgClasses = "";
  let textColorClasses = "text-[#282834]";
  let roundingClasses = "";

  if (isStart && isEnd) {
    bgClasses = "bg-[#434ce4]";
    textColorClasses = "text-white";
    roundingClasses = "rounded-[8px]";
  } else if (isStart) {
    bgClasses = "bg-[#434ce4]";
    textColorClasses = "text-white";
    roundingClasses = "rounded-bl-[8px] rounded-tl-[8px]";
  } else if (isEnd) {
    bgClasses = "bg-[#434ce4]";
    textColorClasses = "text-white";
    roundingClasses = "rounded-br-[8px] rounded-tr-[8px]";
  } else if (isInRange) {
    bgClasses = "bg-[#dee9ff]";
  }

  return (
    <div
      onClick={onClick}
      className={`content-stretch flex flex-col font-['Inter',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center cursor-pointer hover:opacity-80 transition-opacity ${bgClasses} ${roundingClasses}`}
      data-name="day"
    >
      <p className={`css-4hzbpn leading-[16px] relative shrink-0 text-[12px] w-full ${textColorClasses}`} style={{ fontFeatureSettings: "'case'" }}>
        {day}
      </p>
      <p className={`css-4hzbpn leading-[12px] relative shrink-0 text-[10px] w-full ${textColorClasses}`} style={{ fontFeatureSettings: "'case'" }}>
        $ {formatAmount(amount)}
      </p>
    </div>
  );
}

// Componente para renderizar um dia genérico no calendário
function DayCell({ day, month, dayValues, getDayStatus, onDayClick }: {
  day: number;
  month: 'mes1' | 'mes2';
  dayValues: Record<string, number>;
  getDayStatus: (day: number, month: 'mes1' | 'mes2') => { isAvailable: boolean; isStart: boolean; isEnd: boolean; isInRange: boolean };
  onDayClick: (day: number, month: 'mes1' | 'mes2') => void;
}) {
  const dayKey = `${month}-${day}`;
  const hasValue = dayValues[dayKey] !== undefined;
  const status = getDayStatus(day, month);
  
  if (hasValue) {
    return (
      <DayAvailable 
        day={day} 
        amount={dayValues[dayKey]} 
        {...status} 
        onClick={() => onDayClick(day, month)} 
      />
    );
  } else if (status.isInRange) {
    return <DayInRangeNoValue day={day} {...status} />;
  } else {
    return <DayUnavailable day={day} />;
  }
}

// Semanas dinâmicas usando DayCell
function WeekRow({ days, month, dayValues, getDayStatus, onDayClick }: {
  days: (number | null)[];
  month: 'mes1' | 'mes2';
  dayValues: Record<string, number>;
  getDayStatus: (day: number, month: 'mes1' | 'mes2') => { isAvailable: boolean; isStart: boolean; isEnd: boolean; isInRange: boolean };
  onDayClick: (day: number, month: 'mes1' | 'mes2') => void;
}) {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      {days.map((day, index) => 
        day === null ? (
          <div key={`empty-${index}`} className="size-[48px]" />
        ) : (
          <DayCell 
            key={`${month}-${day}`}
            day={day} 
            month={month} 
            dayValues={dayValues} 
            getDayStatus={getDayStatus} 
            onDayClick={onDayClick} 
          />
        )
      )}
    </div>
  );
}

function Component2Meses({ onDayClick, getDayStatus, dayValues, onScroll, hasScrolled, mes1Label, mes2Label, mes1Weeks, mes2Weeks }: {
  onDayClick: (day: number, month: 'mes1' | 'mes2') => void;
  getDayStatus: (day: number, month: 'mes1' | 'mes2') => { isAvailable: boolean; isStart: boolean; isEnd: boolean; isInRange: boolean };
  dayValues: Record<string, number>;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  hasScrolled: boolean;
  mes1Label: string;
  mes2Label: string;
  mes1Weeks: (number | null)[][];
  mes2Weeks: (number | null)[][];
}) {
  return (
    <div className="relative flex-1 w-[360px] shrink-0 overflow-hidden">
      <div
        className={`absolute top-0 left-0 right-0 h-[8px] pointer-events-none z-10 transition-opacity ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'linear-gradient(to bottom, rgba(40, 40, 52, 0.1) 0%, rgba(40, 40, 52, 0) 100%)' }}
      />
      <div
        onScroll={onScroll}
        className="content-stretch flex flex-col h-full items-center overflow-x-clip overflow-y-auto pt-[16px] w-[360px]"
        data-name="2 meses"
      >
        <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[336px]" data-name="Mes">
          <InfoMes title={mes1Label} />
          {mes1Weeks.map((week, index) => (
            <WeekRow key={`mes1-week-${index}`} days={week} month="mes1" dayValues={dayValues} getDayStatus={getDayStatus} onDayClick={onDayClick} />
          ))}
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[336px]" data-name="Mes">
          <InfoMes title={mes2Label} />
          {mes2Weeks.map((week, index) => (
            <WeekRow key={`mes2-week-${index}`} days={week} month="mes2" dayValues={dayValues} getDayStatus={getDayStatus} onDayClick={onDayClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9c9ebf] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Seleccionar</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#d0d4e6] h-[40px] max-h-[40px] min-h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[2px] relative size-full">
          <IconLabel />
        </div>
      </div>
    </div>
  );
}

function Cuenta() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] shrink-0 w-[360px] mt-auto transition-all duration-300 ease-in-out" data-name="cuenta">
      <Button />
    </div>
  );
}

function CuentaWithSelection({ adelantas, costo, recibes, onSelect, isDisabled = false }: { adelantas: number; costo: number; recibes: number; onSelect?: () => void; isDisabled?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] shrink-0 w-[360px] mt-auto transition-all duration-300 ease-in-out" data-name="cuenta">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full animate-[fadeIn_300ms_ease-in-out]">
        {/* Adelantas */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            <p className="css-ew64yg leading-[18px]">Adelantas</p>
          </div>
          <div className="content-stretch flex items-baseline relative shrink-0">
            <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">$</p>
              </div>
              <div className="content-stretch flex items-baseline relative shrink-0">
                <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                  <p className="css-ew64yg leading-[18px]">{formatNumber(adelantas)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Costo */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="flex flex-row items-end self-stretch">
            <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">Costo</p>
              </div>
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">3,24%</p>
              </div>
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Info">
                    <g id="Vector">
                      <path d={svgPathsInfo.p15320700} fill="var(--fill-0, #434CE4)" />
                      <path d={svgPathsInfo.p35066680} fill="var(--fill-0, #434CE4)" />
                      <path clipRule="evenodd" d={svgPathsInfo.p3b9a5f80} fill="var(--fill-0, #434CE4)" fillRule="evenodd" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-baseline relative shrink-0">
            <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">-</p>
              </div>
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">$</p>
              </div>
              <div className="content-stretch flex items-baseline relative shrink-0">
                <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                  <p className="css-ew64yg leading-[18px]">{formatNumber(costo)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recibes */}
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            <p className="css-ew64yg leading-[18px]">Recibes</p>
          </div>
          <div className="content-stretch flex items-baseline relative shrink-0">
            <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">$</p>
              </div>
              <div className="content-stretch flex items-baseline relative shrink-0">
                <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                  <p className="css-ew64yg leading-[18px]">{formatNumber(recibes)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão Seleccionar - ativo ou inativo baseado em isDisabled */}
      <div 
        className={`h-[40px] max-h-[40px] min-h-[40px] relative rounded-[12px] shrink-0 w-full transition-colors ${
          isDisabled 
            ? 'bg-[#d0d4e6] cursor-not-allowed' 
            : 'bg-[#434ce4] cursor-pointer hover:bg-[#3840d0]'
        }`}
        onClick={isDisabled ? undefined : onSelect}
      >
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className={`css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] ${
                isDisabled ? 'text-[#9c9ebf]' : 'text-white'
              }`} style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">Seleccionar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BottomSheetNoModal({ onDismiss, onSelect, initialSelection, totalDisponible = 50000000 }: {
  onDismiss?: () => void;
  onSelect?: (adelantas: number, costo: number, recibes: number, startDay: number, endDay: number) => void;
  initialSelection?: { startDay: number; endDay: number } | null;
  totalDisponible?: number;
}) {
  const [startDate, setStartDate] = useState<DayWithMonth | null>(
    initialSelection?.startDay
      ? { day: initialSelection.startDay >= 100 ? initialSelection.startDay - 100 : initialSelection.startDay, month: initialSelection.startDay >= 100 ? 'mes2' : 'mes1' }
      : null
  );
  const [endDate, setEndDate] = useState<DayWithMonth | null>(
    initialSelection?.endDay
      ? { day: initialSelection.endDay >= 100 ? initialSelection.endDay - 100 : initialSelection.endDay, month: initialSelection.endDay >= 100 ? 'mes2' : 'mes1' }
      : null
  );
  const [hasScrolled, setHasScrolled] = useState(false);

  // Calcular os 2 meses a exibir: mês atual +2 e +3
  const now = new Date();
  const mes1Date = new Date(now.getFullYear(), now.getMonth() + 2, 1);
  const mes2Date = new Date(now.getFullYear(), now.getMonth() + 3, 1);
  const mes1Label = MONTH_NAMES_ES[mes1Date.getMonth()];
  const mes2Label = MONTH_NAMES_ES[mes2Date.getMonth()];
  const mes1Weeks = buildWeeks(mes1Date.getFullYear(), mes1Date.getMonth());
  const mes2Weeks = buildWeeks(mes2Date.getFullYear(), mes2Date.getMonth());
  const mes1Days = new Date(mes1Date.getFullYear(), mes1Date.getMonth() + 1, 0).getDate();
  const mes2Days = new Date(mes2Date.getFullYear(), mes2Date.getMonth() + 1, 0).getDate();

  // Pesos relativos por dia disponível (os dias que têm dinheiro liberável)
  const dayValues: Record<string, number> = {
    // Mes 1
    'mes1-3': 847,
    'mes1-4': 623,
    'mes1-5': 991,
    'mes1-6': 754,
    'mes1-7': 80,
    'mes1-8': 812,
    'mes1-9': 567,
    'mes1-10': 934,
    'mes1-11': 110,
    'mes1-12': 678,
    'mes1-13': 856,
    'mes1-14': 60,
    'mes1-19': 745,
    'mes1-28': 519,
    'mes1-29': 883,
    // Mes 2
    'mes2-3': 612,
    'mes2-5': 789,
    'mes2-6': 534,
    'mes2-7': 891,
    'mes2-8': 90,
    'mes2-9': 723,
    'mes2-10': 895,
    'mes2-12': 641,
    'mes2-13': 778,
    'mes2-14': 140,
    'mes2-19': 834,
  };

  // Escalar os valores para que a soma total seja exatamente igual ao totalDisponible
  const totalRawValues = Object.values(dayValues).reduce((sum, v) => sum + v, 0);
  const scaledDayValues: Record<string, number> = {};
  const dayEntries = Object.entries(dayValues);
  let runningSum = 0;
  dayEntries.forEach(([key, val], index) => {
    if (index === dayEntries.length - 1) {
      // Último dia: ajusta para que a soma seja exatamente totalDisponible
      scaledDayValues[key] = totalDisponible - runningSum;
    } else {
      scaledDayValues[key] = Math.round(val / totalRawValues * totalDisponible);
      runningSum += scaledDayValues[key];
    }
  });

  // Converter data para número único para comparação (dia + 100*mês_index)
  const dateToNumber = (date: DayWithMonth): number => {
    const monthOffset = date.month === 'mes2' ? 100 : 0;
    return date.day + monthOffset;
  };

  const handleDayClick = (day: number, month: 'mes1' | 'mes2') => {
    const dayKey = `${month}-${day}`;
    if (!scaledDayValues[dayKey]) return; // Só permite clicar em dias com valor

    const clickedDate: DayWithMonth = { day, month };
    const clickedNum = dateToNumber(clickedDate);

    if (startDate === null) {
      // Primeiro clique
      setStartDate(clickedDate);
      setEndDate(clickedDate);
    } else if (endDate && dateToNumber(endDate) === dateToNumber(startDate)) {
      // Segundo clique
      const startNum = dateToNumber(startDate);
      if (clickedNum >= startNum) {
        setEndDate(clickedDate);
      } else {
        setEndDate(startDate);
        setStartDate(clickedDate);
      }
    } else {
      // Terceiro clique - reinicia
      setStartDate(clickedDate);
      setEndDate(clickedDate);
    }
  };

  const isDayInRange = (day: number, month: 'mes1' | 'mes2'): boolean => {
    if (!startDate || !endDate) return false;
    
    const dayNum = dateToNumber({ day, month });
    const startNum = dateToNumber(startDate);
    const endNum = dateToNumber(endDate);
    
    return dayNum >= startNum && dayNum <= endNum;
  };

  const getDayStatus = (day: number, month: 'mes1' | 'mes2') => {
    const dayKey = `${month}-${day}`;
    const isAvailable = scaledDayValues[dayKey] !== undefined;
    const isStart = startDate ? startDate.day === day && startDate.month === month : false;
    const isEnd = endDate ? endDate.day === day && endDate.month === month : false;
    const isInRange = isDayInRange(day, month);

    return { isAvailable, isStart, isEnd, isInRange };
  };

  const getSelectedTotal = (): number => {
    if (!startDate || !endDate) return 0;
    
    let total = 0;
    const startNum = dateToNumber(startDate);
    const endNum = dateToNumber(endDate);
    
    // Iterar sobre todos os dias possíveis no range
    for (let num = startNum; num <= endNum; num++) {
      let day: number, month: 'mes1' | 'mes2';

      if (num >= 100) {
        month = 'mes2';
        day = num - 100;
      } else {
        month = 'mes1';
        day = num;
      }
      
      // Verificar se o dia existe no mês
      if (month === 'mes1' && day <= mes1Days && day >= 1) {
        const dayKey = `mes1-${day}`;
        if (scaledDayValues[dayKey]) {
          total += scaledDayValues[dayKey];
        }
      } else if (month === 'mes2' && day <= mes2Days && day >= 1) {
        const dayKey = `mes2-${day}`;
        if (scaledDayValues[dayKey]) {
          total += scaledDayValues[dayKey];
        }
      }
    }
    
    return total;
  };

  const selectedTotal = getSelectedTotal();
  const cost = Math.round(selectedTotal * 0.0324);
  const receive = selectedTotal - cost;
  const hasSelection = startDate !== null && endDate !== null;

  // Verifica se a seleção mudou em relação à inicial
  const hasSelectionChanged = initialSelection
    ? (dateToNumber(startDate ?? { day: 0, month: 'mes1' }) !== initialSelection.startDay || dateToNumber(endDate ?? { day: 0, month: 'mes1' }) !== initialSelection.endDay)
    : hasSelection;

  const handleSelect = () => {
    if (hasSelectionChanged && onSelect && startDate && endDate) {
      onSelect(selectedTotal, cost, receive, dateToNumber(startDate), dateToNumber(endDate));
    }
  };

  return (
    <div className="bg-white flex flex-col items-start overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] w-[360px] h-[720px]" data-name="Bottom sheet no modal">
      <Header1 onDismiss={onDismiss} />
      <Component2Meses
        onDayClick={handleDayClick}
        getDayStatus={getDayStatus}
        dayValues={scaledDayValues}
        onScroll={(e) => setHasScrolled(e.currentTarget.scrollTop > 0)}
        hasScrolled={hasScrolled}
        mes1Label={mes1Label}
        mes2Label={mes2Label}
        mes1Weeks={mes1Weeks}
        mes2Weeks={mes2Weeks}
      />
      {hasSelection ? (
        <CuentaWithSelection
          adelantas={selectedTotal}
          costo={cost}
          recibes={receive}
          onSelect={handleSelect}
          isDisabled={!hasSelectionChanged}
        />
      ) : (
        <Cuenta />
      )}
    </div>
  );
}
