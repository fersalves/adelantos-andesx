import svgPaths from "./svg-8gbsw7g7nu";
import { useState } from "react";
import BottomSheetNoModal from "./BottomSheetNoModal";

// Função para formatar números com separadores de milhares
function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
          <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#282834] text-[14px] tracking-[0.14px]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss02', 'dlig', 'lnum', 'pnum'" }}>
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
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[16px] text-center text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
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
          <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[24px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">El total disponible</p>
      </div>
    </div>
  );
}

function Amount({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">{formatNumber(totalDisponible)}</p>
      </div>
    </div>
  );
}

function MoneyConfig({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Adelantas</p>
      </div>
      <MoneyAmount totalDisponible={totalDisponible} />
    </div>
  );
}

function CostoDiscount() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center leading-[0] not-italic relative shrink-0" data-name="Costo discount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Costo</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center relative shrink-0 text-[#282834] text-[0px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid leading-[18px] line-through text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
          3,24%
        </p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[#1f8923] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">{formatNumber(custo)}</p>
      </div>
    </div>
  );
}

function MoneyConfig1({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">-</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646587] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">{formatNumber(recibes)}</p>
      </div>
    </div>
  );
}

function MoneyConfig2({ totalDisponible }: { totalDisponible: number }) {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(0,0,0,0.9)]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[12px] text-[10px]">
          <span className="font-['Inter:Regular',sans-serif] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            Al confirmar, aceptas los
          </span>
          <span className="font-['Inter:Regular',sans-serif] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            {" "}
          </span>
          <span className="decoration-solid font-['Inter:Semi_Bold',sans-serif] text-[#434ce4] underline cursor-pointer" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          <span className="font-['Inter:Regular',sans-serif] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#646587] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[18px]">Selecciona los días con dinero a liberar.</p>
      </div>
      <ButtonSeleccionar onClick={onSeleccionarClick} />
    </div>
  );
}

function IconLabelEditar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.9)] w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn text-[10px]">
          <span className="font-['Inter:Regular',sans-serif] leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            Al confirmar, aceptas los
          </span>
          <span className="font-['Inter:Regular',sans-serif] leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            {" "}
          </span>
          <span className="decoration-solid font-['Inter:Semi_Bold',sans-serif] leading-[12px] text-[#434ce4] underline cursor-pointer" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          <span className="font-['Inter:Regular',sans-serif] leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
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
      className="bg-white relative rounded-[12px] shrink-0 w-[328px] cursor-pointer transition-all" 
      data-name="total"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Frame1 totalDisponible={totalDisponible} />
        {isSelected && <TyC onConfirmarClick={onConfirmarClick} />}
      </div>
      <div 
        aria-hidden="true" 
        className={`absolute inset-0 pointer-events-none rounded-[12px] transition-all ${
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
    <div className="relative shrink-0 size-[21px]" data-name="icon parciales">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_4_13419)" id="icon parciales">
          <path d={svgPaths.pe5d6f00} fill="var(--fill-0, black)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.pd381c00} fill="var(--fill-0, black)" fillOpacity="0.9" id="Vector_2" />
          <path d={svgPaths.p26f676c0} id="Vector_3" stroke="var(--stroke-0, black)" strokeOpacity="0.9" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_4_13419">
            <rect fill="white" height="21" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Titulo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="titulo">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
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

function Parcial({ isSelected, onClick, onSeleccionarClick, parcialValues, onConfirmarClick }: { isSelected: boolean; onClick: () => void; onSeleccionarClick?: () => void; parcialValues: { adelantas: number; costo: number; recibes: number } | null; onConfirmarClick?: () => void }) {
  // Se não há valores selecionados, mostrar apenas o card colapsado
  if (!parcialValues) {
    return (
      <div 
        onClick={onClick}
        className="bg-white relative rounded-[12px] shrink-0 w-[328px] cursor-pointer transition-all" 
        data-name="parcial"
      >
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <Titulo2 />
          {isSelected && <TyCParcial onSeleccionarClick={onSeleccionarClick} />}
        </div>
        <div 
          aria-hidden="true" 
          className={`absolute inset-0 pointer-events-none rounded-[12px] transition-all ${
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
      className="bg-white relative rounded-[12px] shrink-0 w-[328px] cursor-pointer transition-all" 
      data-name="parcial-expandido"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Titulo2 />
        
        {/* Body com valores */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {/* Adelantas */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">Adelantas</p>
            </div>
            <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">$</p>
              </div>
              <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">{formatNumber(parcialValues.adelantas)}</p>
              </div>
            </div>
          </div>

          {/* Costo */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex font-['Inter:Regular',sans-serif] gap-[4px] h-full items-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]">
                  <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'case'" }}>
                    <p className="css-ew64yg leading-[18px]">Costo</p>
                  </div>
                  <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'case'" }}>
                    <p className="css-ew64yg leading-[18px]">4,89%</p>
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
                  <p className="css-ew64yg leading-[18px]">{formatNumber(parcialValues.costo)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <Divider />

          {/* Recibes */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
              <p className="css-ew64yg leading-[18px]">Recibes</p>
            </div>
            <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
              <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">$</p>
              </div>
              <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
                <p className="css-ew64yg leading-[18px]">{formatNumber(parcialValues.recibes)}</p>
              </div>
            </div>
          </div>
        </div>

        {isSelected && <TyCParcialConValores onEditarClick={onSeleccionarClick} onConfirmarClick={onConfirmarClick} />}
      </div>
      <div 
        aria-hidden="true" 
        className={`absolute inset-0 pointer-events-none rounded-[12px] transition-all ${
          isSelected 
            ? "border-2 border-[#434ce4] border-solid shadow-[0px_0px_0px_2px_#dee9ff]" 
            : "border border-[#8788ab] border-solid"
        }`} 
      />
    </div>
  );
}

function ContentContainer({ totalDisponible, onConfirmarClick, onSeleccionarClick, selectedCard, setSelectedCard, parcialValues }: { totalDisponible: number; onConfirmarClick?: () => void; onSeleccionarClick?: () => void; selectedCard: "total" | "parcial" | null; setSelectedCard: (card: "total" | "parcial" | null) => void; parcialValues: { adelantas: number; costo: number; recibes: number } | null }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px px-[16px] py-0 relative w-[360px] rounded-t-[0px] rounded-b-[80px]" data-name="Content Container">
      <Total 
        totalDisponible={totalDisponible} 
        isSelected={selectedCard === "total"} 
        onClick={() => setSelectedCard(selectedCard === "total" ? null : "total")} 
        onConfirmarClick={onConfirmarClick}
      />
      <Parcial 
        isSelected={selectedCard === "parcial"} 
        onClick={() => setSelectedCard(selectedCard === "parcial" ? null : "parcial")} 
        onSeleccionarClick={onSeleccionarClick}
        parcialValues={parcialValues}
        onConfirmarClick={onConfirmarClick}
      />
    </div>
  );
}

// Componente Dimmer para escurecer o fundo
function Dimmer({ onClick }: { onClick?: () => void }) {
  return <div onClick={onClick} className="absolute bg-[rgba(40,40,52,0.6)] inset-0 z-10" data-name="Dimmer" />;
}

export default function AlInstante({ totalDisponible, onBackClick, onConfirmarClick }: { totalDisponible: number; onBackClick?: () => void; onConfirmarClick?: () => void }) {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [selectedCard, setSelectedCard] = useState<"total" | "parcial" | null>(null);
  const [parcialValues, setParcialValues] = useState<{ adelantas: number; costo: number; recibes: number; startDay: number; endDay: number } | null>(null);

  const handleSeleccionarClick = () => {
    setShowBottomSheet(true);
  };

  const handleCloseBottomSheet = () => {
    setShowBottomSheet(false);
  };

  const handleBottomSheetSelect = (adelantas: number, costo: number, recibes: number, startDay: number, endDay: number) => {
    setParcialValues({ adelantas, costo, recibes, startDay, endDay });
    setSelectedCard("parcial");
    setShowBottomSheet(false);
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
          parcialValues={parcialValues ? { adelantas: parcialValues.adelantas, costo: parcialValues.costo, recibes: parcialValues.recibes } : null}
        />
        
        {/* Dimmer e Bottom Sheet com animação de slide up */}
        {showBottomSheet && (
          <>
            <Dimmer onClick={handleCloseBottomSheet} />
            <div 
              className="absolute bottom-0 left-0 w-full z-20 animate-[slideUp_300ms_ease-out]"
              style={{
                animation: showBottomSheet ? 'slideUp 300ms ease-out forwards' : 'slideDown 300ms ease-out forwards'
              }}
            >
              <BottomSheetNoModal 
                onDismiss={handleCloseBottomSheet} 
                onSelect={handleBottomSheetSelect}
                initialSelection={parcialValues ? { startDay: parcialValues.startDay, endDay: parcialValues.endDay } : null}
              />
            </div>
          </>
        )}
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}