import svgPaths from "./svg-8gbsw7g7nu";
import { useState } from "react";

// Função para formatar números com separadores de milhares
function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Abreviações dos meses em espanhol (3 letras, minúsculas)
const MONTH_ABBR_ES = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];

// Formata o texto da pill de período: "01 abr al 24 abr"
// startDay/endDay: dias de mes1 (1-31) ou mes2 (101-131)
function formatPeriodPill(startDay: number, endDay: number): string {
  const now = new Date();
  const mes1Abbr = MONTH_ABBR_ES[(now.getMonth() + 2) % 12];
  const mes2Abbr = MONTH_ABBR_ES[(now.getMonth() + 3) % 12];
  const startActualDay = startDay >= 100 ? startDay - 100 : startDay;
  const startAbbr = startDay >= 100 ? mes2Abbr : mes1Abbr;
  const endActualDay = endDay >= 100 ? endDay - 100 : endDay;
  const endAbbr = endDay >= 100 ? mes2Abbr : mes1Abbr;
  return String(startActualDay).padStart(2, '0') + ' ' + startAbbr + ' al ' + String(endActualDay).padStart(2, '0') + ' ' + endAbbr;
}

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

function ChevronLeft({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative shrink-0 size-[20px] cursor-pointer"
      data-name="Chevron left"
    >
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
      className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px] cursor-pointer"
      data-name="Back button"
    >
      <ChevronLeft />
    </div>
  );
}

function Back({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start min-w-[40px] relative shrink-0" data-name="Back">
      <BackButton onClick={onClick} />
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

function Action() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Action 2">
      <IconButton />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end max-h-[40px] relative shrink-0" data-name="Actions">
      <Action />
    </div>
  );
}

function Header({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Back onClick={onClick} />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[16px] text-center text-ellipsis" style={{ fontFeatureSettings: "'case'", fontWeight: 700 }}>
            <p className="css-g0mm18 leading-[20px] overflow-hidden">Adelantos</p>
          </div>
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
            Elige cuánto adelantar
          </p>
        </div>
      </div>
    </div>
  );
}

function Header1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Header onClick={onClick} />
      <Title />
    </div>
  );
}

function Header2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative shrink-0 w-[360px]" data-name="Header">
      <StatusBarAndroid />
      <Header1 onClick={onClick} />
    </div>
  );
}

function Payment() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Payment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Payment">
          <g id="Vector">
            <path d={svgPaths.p39c8cf80} fill="var(--fill-0, #282834)" />
            <path clipRule="evenodd" d={svgPaths.p28200c80} fill="var(--fill-0, #282834)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="titulo">
      <Payment />
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'", fontWeight: 700 }}>
        <p className="css-ew64yg leading-[20px]">El total disponible</p>
      </div>
    </div>
  );
}

function Amount({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">{formatNumber(totalDisponible)}</p>
      </div>
    </div>
  );
}

function MoneyConfig({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount totalDisponible={totalDisponible} />
    </div>
  );
}

function MoneyAmount({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig totalDisponible={totalDisponible} />
    </div>
  );
}

function Adelantas({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Adelantas">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Adelantas</p>
      </div>
      <MoneyAmount totalDisponible={totalDisponible} />
    </div>
  );
}

function CostoDiscount() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center leading-[0] not-italic relative shrink-0" data-name="Costo discount">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Costo</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#282834] text-[0px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[18px] line-through text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
          3,24%
        </p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#1f8923] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">2,11%</p>
      </div>
    </div>
  );
}

function Amount1({ totalDisponible }: { totalDisponible: number }) {
  // Calcula o custo de 2,11% do total disponível
  const custo = Math.round(totalDisponible * 0.0211);
  
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">{formatNumber(custo)}</p>
      </div>
    </div>
  );
}

function MoneyConfig1({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">-</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount1 totalDisponible={totalDisponible} />
    </div>
  );
}

function MoneyAmount1({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig1 totalDisponible={totalDisponible} />
    </div>
  );
}

function Costo({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="flex flex-row items-center self-stretch">
        <CostoDiscount />
      </div>
      <MoneyAmount1 totalDisponible={totalDisponible} />
    </div>
  );
}

function Costo1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646587] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[16px]">(IVA incluido)</p>
      </div>
    </div>
  );
}

function BodyCosto({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="body costo">
      <Costo totalDisponible={totalDisponible} />
      <Costo1 />
    </div>
  );
}

function BodyCard({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Body card">
      <Adelantas totalDisponible={totalDisponible} />
      <BodyCosto totalDisponible={totalDisponible} />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px max-h-px min-h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <BodyCard totalDisponible={totalDisponible} />
      <Divider />
    </div>
  );
}

function Amount2({ totalDisponible }: { totalDisponible: number }) {
  // Calcula o valor que recebe: totalDisponible - custo (2,11%)
  const custo = Math.round(totalDisponible * 0.0211);
  const recibes = totalDisponible - custo;

  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[18px]">{formatNumber(recibes)}</p>
      </div>
    </div>
  );
}

function MoneyConfig2({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount2 totalDisponible={totalDisponible} />
    </div>
  );
}

function MoneyAmount2({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig2 totalDisponible={totalDisponible} />
    </div>
  );
}

function Recibes({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Recibes">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[18px]">Recibes</p>
      </div>
      <MoneyAmount2 totalDisponible={totalDisponible} />
    </div>
  );
}

function Frame({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 totalDisponible={totalDisponible} />
      <Recibes totalDisponible={totalDisponible} />
    </div>
  );
}

function Frame1({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Titulo />
      <Frame totalDisponible={totalDisponible} />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[18px]">Confirmar</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previne propagação para o card pai
    onClick?.();
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-[#434ce4] content-stretch flex h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[16px] py-[2px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#3840d0] transition-colors" 
      data-name="Button"
    >
      <IconLabel />
    </div>
  );
}

function TyC({ onConfirmarClick }: { onConfirmarClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="TyC">
      <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(0,0,0,0.9)]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[12px] text-[10px]">
          <span className="font-['Inter',sans-serif] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            Al confirmar, aceptas los
          </span>
          <span className="font-['Inter',sans-serif] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            {" "}
          </span>
          <span className="decoration-solid font-['Inter',sans-serif] text-[#434ce4] underline cursor-pointer" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          <span className="font-['Inter',sans-serif] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            .
          </span>
        </p>
      </div>
      <Button onClick={onConfirmarClick} />
    </div>
  );
}

function IconLabelSeleccionar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Seleccionar</p>
      </div>
    </div>
  );
}

function ButtonSeleccionar({ onClick }: { onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previne propagação para o card pai
    onClick?.();
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-[#e9f1ff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[16px] py-[2px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#dce6ff] transition-colors" 
      data-name="Button"
    >
      <IconLabelSeleccionar />
    </div>
  );
}

function TyCParcial({ onSeleccionarClick }: { onSeleccionarClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[280px]" data-name="TyC">
      <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#646587] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[18px]">Selecciona los días con dinero a liberar.</p>
      </div>
      <ButtonSeleccionar onClick={onSeleccionarClick} />
    </div>
  );
}

function IconLabelEditar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[18px]">Editar selección</p>
      </div>
    </div>
  );
}

function ButtonEditar({ onClick }: { onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Previne propagação para o card pai
    onClick?.();
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-[#e9f1ff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[16px] py-[2px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#dce6ff] transition-colors" 
      data-name="Button"
    >
      <IconLabelEditar />
    </div>
  );
}

function TyCParcialConValores({ onEditarClick, onConfirmarClick }: { onEditarClick?: () => void; onConfirmarClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="TyC">
      <div className="flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.9)] w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn text-[10px]">
          <span className="font-['Inter',sans-serif] leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            Al confirmar, aceptas los
          </span>
          <span className="font-['Inter',sans-serif] leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            {" "}
          </span>
          <span className="decoration-solid font-['Inter',sans-serif] leading-[12px] text-[#434ce4] underline cursor-pointer" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          <span className="font-['Inter',sans-serif] leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            .
          </span>
        </p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
        <ButtonEditar onClick={onEditarClick} />
        <Button onClick={onConfirmarClick} />
      </div>
    </div>
  );
}

function Total({ totalDisponible, isSelected, onClick, onConfirmarClick }: { totalDisponible: number; isSelected: boolean; onClick: () => void; onConfirmarClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white relative rounded-[20px] shrink-0 w-[328px] cursor-pointer transition-all"
      data-name="total"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame1 totalDisponible={totalDisponible} />
        {isSelected && <TyC onConfirmarClick={onConfirmarClick} />}
      </div>
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none rounded-[20px] transition-all ${
          isSelected 
            ? "border-2 border-[#434ce4] border-solid shadow-[0px_0px_0px_2px_#dee9ff]" 
            : "border border-[#8788ab] border-solid"
        }`} 
      />
    </div>
  );
}

function IconParciales() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon parciales">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.4697 9.78186C14.4405 9.78186 15.3462 9.92239 16.0303 10.1696C16.3698 10.2922 16.6871 10.4529 16.9307 10.6608C17.1718 10.8666 17.4026 11.1766 17.4033 11.5846C17.4033 11.5875 17.4026 11.5904 17.4023 11.5934L17.4033 17.1256C17.4027 17.529 17.1881 17.8477 16.9453 18.069C16.7027 18.29 16.3847 18.4616 16.043 18.5934C15.3551 18.8586 14.4447 19.0104 13.4697 19.0104C12.4948 19.0103 11.5853 18.8585 10.8975 18.5934C10.5556 18.4616 10.2378 18.29 9.99512 18.069C9.75228 17.8477 9.53778 17.5301 9.53711 17.1266V11.5856C9.53711 11.5813 9.538 11.5771 9.53809 11.5729C9.54288 11.1708 9.77003 10.8648 10.0088 10.6608C10.2523 10.4528 10.5697 10.2922 10.9092 10.1696C11.5934 9.92251 12.4991 9.78189 13.4697 9.78186ZM16.0303 15.8121C15.3461 16.0593 14.44 16.2008 13.4688 16.2008C12.4976 16.2008 11.5921 16.0593 10.9082 15.8121C10.8498 15.791 10.7931 15.7662 10.7363 15.7428V17.1041C10.7423 17.1152 10.7586 17.142 10.8027 17.1823C10.8974 17.2685 11.068 17.3736 11.3291 17.4742C11.8473 17.674 12.604 17.8101 13.4697 17.8102C14.3357 17.8102 15.093 17.674 15.6113 17.4742C15.8719 17.3738 16.042 17.2684 16.1367 17.1823C16.1782 17.1445 16.1952 17.1182 16.2021 17.1061V15.7428C16.1454 15.7662 16.0887 15.791 16.0303 15.8121ZM16.0303 13.0016C15.3461 13.2488 14.44 13.3903 13.4688 13.3903C12.4976 13.3902 11.5921 13.2488 10.9082 13.0016C10.8498 12.9805 10.7931 12.9557 10.7363 12.9323V14.3541C10.7446 14.3651 10.7593 14.3842 10.7881 14.4088C10.8818 14.4889 11.0531 14.588 11.3164 14.6832C11.8383 14.8719 12.5993 15.0006 13.4688 15.0006C14.3383 15.0006 15.0998 14.8719 15.6221 14.6832C15.8853 14.5881 16.0564 14.4889 16.1504 14.4088C16.1783 14.3849 16.1935 14.3662 16.2021 14.3551V12.9323C16.1453 12.9557 16.0887 12.9805 16.0303 13.0016ZM13.4697 10.9811C12.6007 10.9811 11.8397 11.1099 11.3174 11.2985C11.0537 11.3937 10.882 11.4927 10.7881 11.5729C10.7832 11.577 10.7795 11.5818 10.7754 11.5856C10.7795 11.5893 10.7832 11.5941 10.7881 11.5983C10.8818 11.6784 11.053 11.7774 11.3164 11.8727C11.8383 12.0613 12.5992 12.19 13.4688 12.1901C14.3384 12.1901 15.0998 12.0614 15.6221 11.8727C15.8855 11.7775 16.0565 11.6784 16.1504 11.5983C16.1551 11.5942 16.158 11.5883 16.1621 11.5846C16.1585 11.5814 16.1554 11.5773 16.1514 11.5739C16.0573 11.4936 15.8857 11.3937 15.6221 11.2985C15.0998 11.1098 14.3387 10.9811 13.4697 10.9811Z" fill="#282834"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.501 1.06702C12.8322 1.06719 13.1006 1.33536 13.1006 1.66663V1.90002H13.333C15.0451 1.90002 16.4335 3.28754 16.4336 4.99963V8.33264C16.4336 8.66401 16.1644 8.93323 15.833 8.93323C15.5018 8.93305 15.2334 8.6639 15.2334 8.33264V7.26624H3.09961V11.6666C3.09978 12.7159 3.95065 13.566 5 13.566H7.5C7.83129 13.566 8.09948 13.8354 8.09961 14.1666C8.09943 14.4978 7.83126 14.7662 7.5 14.7662H5C3.2879 14.7662 1.90057 13.3787 1.90039 11.6666V4.99963C1.90052 3.28754 3.28788 1.90002 5 1.90002H5.23242V1.66663C5.23242 1.33526 5.50164 1.06702 5.83301 1.06702C6.16423 1.06719 6.43262 1.33536 6.43262 1.66663V1.90002H11.9004V1.66663C11.9004 1.33526 12.1696 1.06702 12.501 1.06702ZM5 3.09924C3.95062 3.09924 3.09974 3.95028 3.09961 4.99963V6.06604H15.2334V4.99963C15.2333 3.95028 14.3824 3.09924 13.333 3.09924H13.1006V3.33362C13.1004 3.66473 12.8321 3.93305 12.501 3.93323C12.1697 3.93323 11.9006 3.66484 11.9004 3.33362V3.09924H6.43262V3.33362C6.43244 3.66473 6.16412 3.93305 5.83301 3.93323C5.50175 3.93323 5.2326 3.66484 5.23242 3.33362V3.09924H5Z" fill="#282834"/>
      </svg>
    </div>
  );
}

function Titulo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="titulo">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'", fontWeight: 700 }}>
        <p className="css-ew64yg leading-[20px]">Una parte del total</p>
      </div>
    </div>
  );
}

function Titulo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Titulo">
      <IconParciales />
      <Titulo1 />
    </div>
  );
}

function Parcial({ isSelected, onClick, onSeleccionarClick, parcialValues, onConfirmarClick }: { isSelected: boolean; onClick: () => void; onSeleccionarClick?: () => void; parcialValues: { adelantas: number; costo: number; recibes: number; startDay: number; endDay: number } | null; onConfirmarClick?: () => void }) {
  // Se não há valores selecionados, mostrar apenas o card colapsado
  if (!parcialValues) {
    return (
      <div 
        onClick={onClick}
        className="bg-white relative rounded-[20px] shrink-0 w-[328px] cursor-pointer transition-all"
        data-name="parcial"
      >
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <Titulo2 />
          {isSelected && <TyCParcial onSeleccionarClick={onSeleccionarClick} />}
        </div>
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none rounded-[20px] transition-all ${
            isSelected 
              ? "border-2 border-[#434ce4] border-solid shadow-[0px_0px_0px_2px_#dee9ff]" 
              : "border border-[#8788ab] border-solid"
          }`} 
        />
      </div>
    );
  }

  // Se há valores selecionados, mostrar o card expandido com os detalhes
  return (
    <div 
      onClick={onClick}
      className="bg-white relative rounded-[20px] shrink-0 w-[328px] cursor-pointer transition-all"
      data-name="parcial-expandido"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Titulo2 />
        
        {/* Body com valores */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {/* Adelantas */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="flex items-center gap-[4px]">
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">Adelantas</p>
              </div>
              {/* Pill con el período seleccionado — badge neutral quiet */}
              <div
                className="flex items-center rounded-[9999px]"
                style={{ background: 'rgba(100,101,135,0.12)', paddingTop: 2, paddingBottom: 2, paddingLeft: 8, paddingRight: 8 }}
              >
                <span
                  className="font-['Inter',sans-serif] text-[#282834]"
                  style={{ fontSize: 10, lineHeight: '14px', fontWeight: 400 }}
                >
                  {formatPeriodPill(parcialValues.startDay, parcialValues.endDay)}
                </span>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">$</p>
              </div>
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">{formatNumber(parcialValues.adelantas)}</p>
              </div>
            </div>
          </div>

          {/* Costo */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex font-['Inter',sans-serif] gap-[4px] h-full items-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]">
                  <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'case'" }}>
                    <p className="css-ew64yg leading-[18px]">Costo</p>
                  </div>
                  <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'case'" }}>
                    <p className="css-ew64yg leading-[18px]">4,89%</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0">
                <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                  <p className="css-ew64yg leading-[18px]">-</p>
                </div>
                <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                  <p className="css-ew64yg leading-[18px]">$</p>
                </div>
                <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                  <p className="css-ew64yg leading-[18px]">{formatNumber(parcialValues.costo)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <Divider />

          {/* Recibes */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
              <p className="css-ew64yg leading-[18px]">Recibes</p>
            </div>
            <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
                <p className="css-ew64yg leading-[18px]">$</p>
              </div>
              <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
                <p className="css-ew64yg leading-[18px]">{formatNumber(parcialValues.recibes)}</p>
              </div>
            </div>
          </div>
        </div>

        {isSelected && <TyCParcialConValores onEditarClick={onSeleccionarClick} onConfirmarClick={onConfirmarClick} />}
      </div>
      <div 
        aria-hidden="true" 
        className={`absolute inset-0 pointer-events-none rounded-[20px] transition-all ${
          isSelected
            ? "border-2 border-[#434ce4] border-solid shadow-[0px_0px_0px_2px_#dee9ff]"
            : "border border-[#8788ab] border-solid"
        }`}
      />
    </div>
  );
}

function ContentContainer({ totalDisponible, onConfirmarClick, onSeleccionarClick, selectedCard, setSelectedCard, parcialValues }: { totalDisponible: number; onConfirmarClick?: (amount: number) => void; onSeleccionarClick?: () => void; selectedCard: "total" | "parcial" | null; setSelectedCard: (card: "total" | "parcial" | null) => void; parcialValues: { adelantas: number; costo: number; recibes: number; startDay: number; endDay: number } | null }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px px-[16px] py-0 relative w-[360px] rounded-t-[0px] rounded-b-[80px]" data-name="Content Container">
      <Total
        totalDisponible={totalDisponible}
        isSelected={selectedCard === "total"}
        onClick={() => setSelectedCard(selectedCard === "total" ? null : "total")}
        onConfirmarClick={() => onConfirmarClick?.(totalDisponible)}
      />
      <Parcial
        isSelected={selectedCard === "parcial"}
        onClick={() => setSelectedCard(selectedCard === "parcial" ? null : "parcial")}
        onSeleccionarClick={onSeleccionarClick}
        parcialValues={parcialValues}
        onConfirmarClick={() => onConfirmarClick?.(parcialValues?.adelantas ?? 0)}
      />
    </div>
  );
}


export default function AlInstante({ totalDisponible, onBackClick, onConfirmarClick, onCalendarOpen }: { totalDisponible: number; onBackClick?: () => void; onConfirmarClick?: (amount: number) => void; onCalendarOpen?: (initialSelection: { startDay: number; endDay: number } | null, onSelect: (adelantas: number, costo: number, recibes: number, startDay: number, endDay: number) => void) => void }) {
  const [selectedCard, setSelectedCard] = useState<"total" | "parcial" | null>(null);
  const [parcialValues, setParcialValues] = useState<{ adelantas: number; costo: number; recibes: number; startDay: number; endDay: number } | null>(null);

  const handleSeleccionarClick = () => {
    onCalendarOpen?.(
      parcialValues ? { startDay: parcialValues.startDay, endDay: parcialValues.endDay } : null,
      (adelantas, costo, recibes, startDay, endDay) => {
        setParcialValues({ adelantas, costo, recibes, startDay, endDay });
        setSelectedCard("parcial");
      }
    );
  };

  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Al instante">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header2 onClick={onBackClick} />
        <ContentContainer
          totalDisponible={totalDisponible}
          onConfirmarClick={onConfirmarClick}
          onSeleccionarClick={handleSeleccionarClick}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          parcialValues={parcialValues ? { adelantas: parcialValues.adelantas, costo: parcialValues.costo, recibes: parcialValues.recibes, startDay: parcialValues.startDay, endDay: parcialValues.endDay } : null}
        />
      </div>
    </div>
  );
}