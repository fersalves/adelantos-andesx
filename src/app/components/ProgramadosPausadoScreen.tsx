import { useState } from "react";
import svgPaths from "@/imports/svg-3gncen35au";

// Status Bar Components
function Wifi() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[17px]" data-name="Wifi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Wifi">
          <g id="Path"></g>
          <g id="Rectangle"></g>
          <g id="Path_2"></g>
          <path d={svgPaths.p34567080} fill="var(--fill-0, #282834)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="col-1 ml-[34.78%] mt-0 relative row-1 size-[17px]" data-name="Signal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Signal">
          <g id="Path"></g>
          <path d={svgPaths.p112c6500} fill="var(--fill-0, #282834)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="col-1 h-[15px] ml-[38px] mt-px relative row-1 w-[8px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 15">
        <g id="Battery">
          <path d={svgPaths.p2dfd100} fill="var(--fill-0, #282834)" id="Base" opacity="0.3" />
          <path d={svgPaths.p2657cc00} fill="var(--fill-0, #282834)" id="Charge" />
        </g>
      </svg>
    </div>
  );
}

function RightIcons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="right icons">
      <Wifi />
      <Signal />
      <Battery />
    </div>
  );
}

function StatusBarAndroid() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Status bar android">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between leading-[0] px-[24px] py-[10px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#282834] text-[14px] tracking-[0.14px]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss02', 'dlig', 'lnum', 'pnum'" }}>
            <p className="css-ew64yg leading-[20px]">12:30</p>
          </div>
          <RightIcons />
        </div>
      </div>
    </div>
  );
}

// Header Components
function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron left">
          <path d={svgPaths.p5e2f8c0} fill="var(--fill-0, #434CE4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px] cursor-pointer hover:bg-[#d4e4ff] transition-colors"
      data-name="Back button"
    >
      <ChevronLeft />
    </div>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Helper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Helper">
          <g id="Vector">
            <path d={svgPaths.p3dc9a500} fill="var(--fill-0, #434CE4)" />
            <path d={svgPaths.p2b034980} fill="var(--fill-0, #434CE4)" />
            <path clipRule="evenodd" d={svgPaths.p38566300} fill="var(--fill-0, #434CE4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Icon button">
      <Helper />
    </div>
  );
}

function Header({ onBackClick }: { onBackClick?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-start min-w-[40px] relative shrink-0">
            <BackButton onClick={onBackClick} />
          </div>
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[16px] text-center text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
            <p className="css-g0mm18 leading-[20px] overflow-hidden">&nbsp;</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end max-h-[40px] relative shrink-0">
            <IconButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[24px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
            Tu adelanto recurrente
          </p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Label">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        Puedes modificar la frecuencia si lo necesitas.
      </p>
    </div>
  );
}

function Subtitulo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subtitulo">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-0 relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-start min-h-px min-w-px relative">
            <Label />
          </div>
        </div>
      </div>
    </div>
  );
}

// Frequency Selectors
function FrequencyButton({ 
  label, 
  isSelected, 
  onClick 
}: { 
  label: string; 
  isSelected: boolean; 
  onClick: () => void;
}) {
  return (
    <div 
      onClick={onClick}
      className={`flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px] cursor-pointer ${isSelected ? 'bg-white' : 'bg-white'}`}
    >
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px px-0 py-[12px] relative rounded-[8px]">
          <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0">
            <div className="shrink-0 size-0" />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-4hzbpn leading-[16px]">{label}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0">
            <div className="shrink-0 size-0" />
          </div>
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className={`absolute border ${
          isSelected 
            ? 'border-2 border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_2px_#dee9ff]' 
            : 'border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]'
        }`} 
      />
    </div>
  );
}

function BoxSelector({ selectedFrequency, onFrequencyChange }: { selectedFrequency: string; onFrequencyChange: (freq: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <FrequencyButton 
          label="Todos los días" 
          isSelected={selectedFrequency === "todos-dias"} 
          onClick={() => onFrequencyChange("todos-dias")}
        />
        <div className="content-stretch flex items-start pb-0 pl-[8px] pr-0 pt-[8px] relative shrink-0">
          <div className="shrink-0 size-0" />
        </div>
        <FrequencyButton 
          label="Una vez a la semana" 
          isSelected={selectedFrequency === "semanal"} 
          onClick={() => onFrequencyChange("semanal")}
        />
        <div className="content-stretch flex items-start pb-0 pl-[8px] pr-0 pt-[8px] relative shrink-0">
          <div className="shrink-0 size-0" />
        </div>
        <FrequencyButton 
          label="Una vez cada 15 días" 
          isSelected={selectedFrequency === "15-dias"} 
          onClick={() => onFrequencyChange("15-dias")}
        />
      </div>
    </div>
  );
}

// Day Selector
function DayButton({ 
  label, 
  isSelected, 
  onClick 
}: { 
  label: string; 
  isSelected: boolean; 
  onClick: () => void;
}) {
  return (
    <div 
      onClick={onClick}
      className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px] cursor-pointer"
      data-name={`Selector ${label}`}
    >
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative">
          <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "'case'" }}>
            <p className="leading-[16px] whitespace-pre-wrap">{label}</p>
          </div>
        </div>
      </div>
      <div 
        aria-hidden="true" 
        className={`absolute border ${
          isSelected 
            ? 'border-2 border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_2px_#dee9ff]' 
            : 'border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]'
        }`} 
      />
    </div>
  );
}

function DayContainer({ selectedDay, onDayChange }: { selectedDay: string; onDayChange: (day: string) => void }) {
  const days = [
    { key: 'lun', label: 'Lun' },
    { key: 'mar', label: 'Mar' },
    { key: 'mie', label: 'Mié' },
    { key: 'jue', label: 'Jue' },
    { key: 'vie', label: 'Vie' },
    { key: 'sab', label: 'Sáb' },
    { key: 'dom', label: 'Dom' }
  ];

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      {days.map(day => (
        <DayButton
          key={day.key}
          label={day.label}
          isSelected={selectedDay === day.key}
          onClick={() => onDayChange(day.key)}
        />
      ))}
    </div>
  );
}

function DaySelector({ selectedDay, onDayChange }: { selectedDay: string; onDayChange: (day: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Selecciona el día</p>
      </div>
      <DayContainer selectedDay={selectedDay} onDayChange={onDayChange} />
    </div>
  );
}

// Info Card
function BadgePill() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center max-h-[16px] min-h-[16px] min-w-[16px] px-[6px] relative shrink-0" data-name="Badge pill">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="-scale-y-100 flex-none h-[16px] rotate-180 w-[57px]">
          <div className="bg-[#d74009] rounded-[9999px] size-full" />
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[10px] text-center text-white" style={{ fontFeatureSettings: "'case'" }}>
        <p className="leading-[12px] whitespace-pre-wrap">En pausa</p>
      </div>
    </div>
  );
}

function ListRowRightContentSmall() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="_List row/right content small">
      <BadgePill />
    </div>
  );
}

function InfoCardTitleRow({ frequencyText }: { frequencyText: string }) {
  // Parse the frequency text to extract parts
  const parseFrequencyText = () => {
    if (frequencyText.includes("todos los días")) {
      return {
        prefix: "Lo recibes ",
        bold: "todos los días entre las 8:00 y 11:00am",
        suffix: " (hora centro)."
      };
    } else if (frequencyText.includes("todos los")) {
      // Para "todos los lunes", "todos los martes", etc
      const match = frequencyText.match(/Lo recibes (todos los \w+) entre las 8:00 y 11:00am \(hora centro\)\./);
      if (match) {
        return {
          prefix: "Lo recibes ",
          bold: `${match[1]} entre las 8:00 y 11:00am`,
          suffix: " (hora centro)."
        };
      }
    } else if (frequencyText.includes("los días 1 y 15")) {
      return {
        prefix: "Lo recibes ",
        bold: "los días 1 y 15 de cada mes entre las 8:00 y 11:00am",
        suffix: " (hora centro)."
      };
    }
    
    // Fallback
    return {
      prefix: "",
      bold: frequencyText,
      suffix: ""
    };
  };

  const { prefix, bold, suffix } = parseFrequencyText();

  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[0px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="leading-[16px]">{prefix}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] leading-[16px] not-italic" style={{ fontFeatureSettings: "'case'" }}>
            {bold}
          </span>
          <span className="leading-[16px]">{suffix}</span>
        </p>
      </div>
      <ListRowRightContentSmall />
    </div>
  );
}

function InfoCardContent({ frequencyText }: { frequencyText: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Content">
      <InfoCardTitleRow frequencyText={frequencyText} />
    </div>
  );
}

function InfoCardListRow({ frequencyText }: { frequencyText: string }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start py-[16px] relative rounded-[8px] shrink-0 w-full" data-name="List row">
      <div className="content-stretch flex items-start pl-[16px] pt-[16px] relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
      <InfoCardContent frequencyText={frequencyText} />
      <div className="content-stretch flex items-start pl-[16px] pt-[16px] relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
    </div>
  );
}

function InfoCard({ frequencyText }: { frequencyText: string }) {
  return (
    <div className="bg-[#f4f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-full">
      <InfoCardListRow frequencyText={frequencyText} />
    </div>
  );
}

// Footer components adapted from Figma import
function TitleRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[0px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`El costo varía entre el 0,35% y 13,50%. `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Semi_Bold',sans-serif] leading-[16px] not-italic text-[#434ce4] underline cursor-pointer" style={{ fontFeatureSettings: "'case'" }}>
            Conoce cómo se calcula
          </span>
          <span className="leading-[16px]">
            {`. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`Al confirmar, aceptas los `}
          </span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Semi_Bold',sans-serif] leading-[16px] not-italic text-[#434ce4] underline cursor-pointer" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          <span className="leading-[16px]">.</span>
        </p>
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Content">
      <TitleRow />
    </div>
  );
}

function ListRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[12px] relative rounded-[8px]" data-name="List row">
      <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
      <FooterContent />
      <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
    </div>
  );
}

function SlotContainerHPaddings() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Slot container h paddings">
      <div className="content-stretch flex items-start pl-[4px] pt-[4px] relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
      <ListRow />
      <div className="content-stretch flex items-start pl-[4px] pt-[4px] relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
    </div>
  );
}

function SlotContainerVPaddings() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot container v paddings">
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
      <SlotContainerHPaddings />
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="shrink-0 size-0" />
      </div>
    </div>
  );
}

function IconLabel({ disabled }: { disabled: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon & Label">
      <div className={`flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 ${disabled ? 'text-[#a6b0ff]' : 'text-[#434ce4]'} text-[14px] text-ellipsis whitespace-nowrap`} style={{ fontFeatureSettings: "'case'" }}>
        <p className="leading-[18px] overflow-hidden">{`Encender `}</p>
      </div>
    </div>
  );
}

function EncenderButton({ disabled, onClick }: { disabled: boolean; onClick?: () => void }) {
  return (
    <div 
      onClick={disabled ? undefined : onClick}
      className={`${disabled ? 'bg-[#e9f1ff] cursor-not-allowed' : 'bg-[#e9f1ff] cursor-pointer hover:bg-[#d4e4ff] transition-colors'} h-[48px] max-h-[48px] min-h-[48px] relative rounded-[12px] shrink-0 w-full`}
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[24px] py-[2px] relative size-full">
          <IconLabel disabled={disabled} />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup({ disabled, onClick }: { disabled: boolean; onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button group">
      <EncenderButton disabled={disabled} onClick={onClick} />
    </div>
  );
}

function Actions({ disabled, onClick }: { disabled: boolean; onClick?: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
          <ButtonGroup disabled={disabled} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function FixedFooter({ disabled, onClick }: { disabled: boolean; onClick?: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Fixed footer">
      <SlotContainerVPaddings />
      <Actions disabled={disabled} onClick={onClick} />
    </div>
  );
}

interface ProgramadosPausadoScreenProps {
  onBackClick?: () => void;
  onReactivarClick?: (frequencyType: string, selectedDay?: string) => void;
  initialFrequency?: { type: string; selectedDay?: string };
}

export function ProgramadosPausadoScreen({ 
  onBackClick,
  onReactivarClick,
  initialFrequency
}: ProgramadosPausadoScreenProps) {
  const [selectedFrequency, setSelectedFrequency] = useState(initialFrequency?.type || "todos-dias");
  const [selectedDay, setSelectedDay] = useState(initialFrequency?.selectedDay || "lun");
  const [hasChanged, setHasChanged] = useState(false);

  const handleFrequencyChange = (freq: string) => {
    setSelectedFrequency(freq);
    // Se mudou da frequência inicial, habilitar o botão
    if (freq !== initialFrequency?.type) {
      setHasChanged(true);
    } else if (freq === "semanal" && selectedDay !== initialFrequency?.selectedDay) {
      // Se voltou para a mesma frequência mas o dia é diferente
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  };

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    // Se mudou do dia inicial, habilitar o botão
    if (day !== initialFrequency?.selectedDay) {
      setHasChanged(true);
    } else if (selectedFrequency !== initialFrequency?.type) {
      // Se o dia voltou ao original mas a frequência é diferente
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  };

  const handleReactivar = () => {
    if (hasChanged && onReactivarClick) {
      onReactivarClick(selectedFrequency, selectedDay);
    }
  };

  const getFrequencyText = () => {
    if (selectedFrequency === "todos-dias") {
      return "Lo recibes todos los días entre las 8:00 y 11:00am (hora centro).";
    } else if (selectedFrequency === "semanal") {
      const dayNames: { [key: string]: string } = {
        'lun': 'lunes',
        'mar': 'martes',
        'mie': 'miércoles',
        'jue': 'jueves',
        'vie': 'viernes',
        'sab': 'sábados',
        'dom': 'domingos'
      };
      return `Lo recibes todos los ${dayNames[selectedDay]} entre las 8:00 y 11:00am (hora centro).`;
    } else {
      return "Lo recibes los días 1 y 15 de cada mes entre las 8:00 y 11:00am (hora centro).";
    }
  };

  return (
    <div className="bg-white relative rounded-[16px] size-full">
      <div className="content-stretch flex flex-col items-start overflow-auto pb-0 pt-0 px-0 relative rounded-[inherit] size-full">
        {/* Header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <StatusBarAndroid />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <Header onBackClick={onBackClick} />
            <Title />
          </div>
          <Subtitulo />
        </div>

        {/* Content */}
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative size-full">
            <BoxSelector selectedFrequency={selectedFrequency} onFrequencyChange={handleFrequencyChange} />
            {selectedFrequency === "semanal" && <DaySelector selectedDay={selectedDay} onDayChange={handleDayChange} />}
            <InfoCard frequencyText={getFrequencyText()} />
          </div>
        </div>

        {/* Footer - fora do padding */}
        <FixedFooter disabled={!hasChanged} onClick={handleReactivar} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}