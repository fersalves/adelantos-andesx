import { useState, useEffect } from "react";
import { useAdminActions } from "@/app/contexts/AdminContext";
import svgPaths from "./svg-qu5qau7y3t";
import { Snackbar } from "@/app/components/Snackbar";
import ProgramadoCard from "@/imports/Programado";
import Popover from "./Popover";

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
          <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-medium justify-center relative shrink-0 text-[#282834] text-[14px] tracking-[0.14px]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss02', 'dlig', 'lnum', 'pnum'" }}>
            <p className="css-ew64yg leading-[20px]">12:30</p>
          </div>
          <RightIcons />
        </div>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow left">
          <path d={svgPaths.p3fc58580} fill="var(--fill-0, #434CE4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackButton() {
  return (
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Back button">
      <ArrowLeft />
    </div>
  );
}

function Back() {
  return (
    <div className="content-stretch flex gap-[8px] items-start min-w-[40px] relative shrink-0" data-name="Back">
      <BackButton />
      <div className="shrink-0 size-[40px]" data-name="Ignore" />
    </div>
  );
}

function History() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="History">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="History">
          <g id="Vector">
            <path d={svgPaths.p32602400} fill="var(--fill-0, #434CE4)" />
            <path clipRule="evenodd" d={svgPaths.p171aab00} fill="var(--fill-0, #434CE4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  const { onHistorialClick } = useAdminActions();
  return (
    <div onClick={onHistorialClick} className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px] cursor-pointer" data-name="Icon button">
      <History />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Action 2">
      <IconButton />
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

function IconButton1() {
  return (
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Icon button">
      <Helper />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end max-h-[40px] relative shrink-0" data-name="Actions">
      <Action />
      <IconButton1 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Back />
          <Actions />
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
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[24px] text-ellipsis" style={{ fontFeatureSettings: "'case'", fontWeight: 700 }}>
            Adelanto disponible
          </p>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Header />
      <Title />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <StatusBarAndroid />
      <Header1 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow right">
          <path d={svgPaths.p2e5e7f00} fill="var(--fill-0, #434CE4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[28px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[34px]">30.000.000</p>
      </div>
    </div>
  );
}

function MoneyConfig() {
  return (
    <div className="content-stretch flex gap-[6px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[28px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[34px]">$</p>
      </div>
      <Amount />
    </div>
  );
}

function MoneyAmount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Info">
          <g id="Vector">
            <path d={svgPaths.p2cae20} fill="var(--fill-0, #434CE4)" />
            <path d={svgPaths.p9e37b00} fill="var(--fill-0, #434CE4)" />
            <path clipRule="evenodd" d={svgPaths.p36617300} fill="var(--fill-0, #434CE4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton2({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="content-stretch flex items-center relative shrink-0 cursor-pointer"
      data-name="Icon button"
    >
      <Info />
    </div>
  );
}

function Frame2({ onInfoClick }: { onInfoClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <MoneyAmount />
      <IconButton2 onClick={onInfoClick} />
    </div>
  );
}

function Textlink({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer"
      data-name="Textlink"
    >
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[16px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[20px]">Adelantar</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function CardInfo({ onInfoClick, onAdelantarClick }: { onInfoClick: () => void; onAdelantarClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[328px]" data-name="Card Info">
      <Frame2 onInfoClick={onInfoClick} />
      <Textlink onClick={onAdelantarClick} />
    </div>
  );
}

function MercadoCredit() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Mercado credit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Mercado credit">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3b5b7560} fill="var(--fill-0, #4850E5)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2806bdf0} fill="var(--fill-0, #4850E5)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFrame() {
  return (
    <div className="absolute bg-[#e9f1ff] left-0 rounded-[32px] size-[32px] top-0" data-name="Icon frame">
      <MercadoCredit />
    </div>
  );
}

function Simple32Px() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="simple/32px">
      <IconFrame />
    </div>
  );
}

function ImageSm() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name=".Image-SM">
      <Simple32Px />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <p className="css-4hzbpn font-['Inter',sans-serif] leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#252537] text-[14px] text-ellipsis w-full">Obtén hasta $ 1.500.000 y devuélvelo en 7, 14, 21 o 28 días.</p>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow right">
          <path d={svgPaths.pe12ebf0} fill="var(--fill-0, #4850E5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text Link">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4850e5] text-[14px] text-right" style={{ fontWeight: 600 }}>
        <p className="css-ew64yg leading-[18px]">Obtener Dinero Express</p>
      </div>
      <ArrowRight2 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Left">
      <Content />
      <TextLink />
    </div>
  );
}

function Right() {
  return <div className="content-stretch flex flex-col items-end self-stretch shrink-0" data-name="Right" />;
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Content">
      <Left />
      <Right />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative" data-name="Content">
      <ImageSm />
      <Content1 />
    </div>
  );
}

function ListRowSimple() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="List Row Simple">
      <Content2 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[20px] shrink-0 w-[328px]" data-name="Card 1 ↴">
      <ListRowSimple />
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card">
      <Card1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[328px]" data-name="Content">
      <Card2 />
    </div>
  );
}

function CardSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[6px] shrink-0 w-[328px]" data-name="Card Section">
      <Content3 />
    </div>
  );
}

function Cross() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="cross">
      <p className="css-ew64yg font-['Inter',sans-serif] font-bold leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#282834] text-[18px] text-ellipsis" style={{ fontFeatureSettings: "'case'", fontWeight: 700 }}>
        ¿Necesitas más dinero?
      </p>
      <CardSection />
    </div>
  );
}

function Frame({ onInfoClick, isOn, onToggle, onAdelantarClick, customText, onModificarClick }: { onInfoClick: () => void; isOn: boolean; onToggle: () => void; onAdelantarClick?: () => void; customText?: string; onModificarClick?: () => void }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[16px] py-0 relative size-full">
        <CardInfo onInfoClick={onInfoClick} onAdelantarClick={onAdelantarClick} />
        <div className="shrink-0 w-[328px]">
          <ProgramadoCard customText={customText} isOn={isOn} onToggle={onToggle} onModificarClick={onModificarClick} showErrorMessage={true} />
        </div>
        <Cross />
      </div>
    </div>
  );
}

export default function AdminPartiallyConProgramadoNoAcreditado({ 
  onAdelantarClick, 
  customText, 
  onModificarClick,
  isToggleOn = true,
  onToggleChange
}: { 
  onAdelantarClick?: () => void; 
  customText?: string; 
  onModificarClick?: () => void;
  isToggleOn?: boolean;
  onToggleChange?: (isOn: boolean) => void;
}) {
  const [showPopover, setShowPopover] = useState(false);
  const [localToggleState, setLocalToggleState] = useState(isToggleOn);
  useEffect(() => { setLocalToggleState(isToggleOn); }, [isToggleOn]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInfoClick = () => {
    setShowPopover(!showPopover);
  };

  const handleToggle = () => {
    const newState = !localToggleState;
    setLocalToggleState(newState);
    onToggleChange?.(newState);
  };

  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Admin">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[24px] pt-0 px-0 relative rounded-[inherit] size-full">
        <Frame1 />
        <Frame onInfoClick={handleInfoClick} isOn={localToggleState} onToggle={handleToggle} onAdelantarClick={onAdelantarClick} customText={customText} onModificarClick={onModificarClick} />
        {showPopover && (
          <div className="absolute left-[22px] top-[224px] w-[243px]">
            <Popover />
          </div>
        )}
        <Snackbar 
          message={snackbarMessage}
          show={showSnackbar}
          onHide={() => setShowSnackbar(false)}
        />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}