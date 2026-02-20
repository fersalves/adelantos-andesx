import svgPaths from "./svg-3gncen35au";
import ProgramadoCambioCondiciones from "@/imports/ProgramadoCambioCondiciones";

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
  return (
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Icon button">
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
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[24px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
            Adelantos
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

function Amount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[28px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[34px]">0</p>
      </div>
    </div>
  );
}

function MoneyConfig() {
  return (
    <div className="content-stretch flex gap-[6px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[28px]" style={{ fontFeatureSettings: "'case'" }}>
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MoneyAmount />
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

function Textlink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Textlink">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">¿Por qué no puedo adelantar?</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function CardInfo() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card info">
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Textlink />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame3 />
      <CardInfo />
    </div>
  );
}

function Frame({ customText, onRevisarCostoClick }: { customText?: string; onRevisarCostoClick?: () => void }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[16px] py-0 relative size-full">
        <Frame2 />
        <div className="shrink-0 w-[328px]">
          <ProgramadoCambioCondiciones customText={customText} onRevisarCostoClick={onRevisarCostoClick} />
        </div>
      </div>
    </div>
  );
}

export default function AdminSinAdelantarConProgramadoCambioCondiciones({ 
  customText, 
  onRevisarCostoClick,
}: { 
  customText?: string; 
  onRevisarCostoClick?: () => void;
}) {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Admin">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[24px] pt-0 px-0 relative rounded-[inherit] size-full">
        <Frame1 />
        <Frame customText={customText} onRevisarCostoClick={onRevisarCostoClick} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}