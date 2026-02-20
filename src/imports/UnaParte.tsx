import svgPaths from "./svg-sorxtgt9g9";

function IconParciales() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="icon parciales">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_77_8037)" id="icon parciales">
          <path d={svgPaths.pe5d6f00} fill="var(--fill-0, black)" fillOpacity="0.9" id="Vector" />
          <path d={svgPaths.pd381c00} fill="var(--fill-0, black)" fillOpacity="0.9" id="Vector_2" />
          <path d={svgPaths.p26f676c0} id="Vector_3" stroke="var(--stroke-0, black)" strokeOpacity="0.9" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_77_8037">
            <rect fill="white" height="21" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Titulo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="titulo">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">Una parte del total</p>
      </div>
    </div>
  );
}

function Titulo1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Titulo">
      <IconParciales />
      <Titulo />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">8.162</p>
      </div>
    </div>
  );
}

function MoneyConfig() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
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

function Adelantas() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Adelantas">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Adelantas</p>
      </div>
      <MoneyAmount />
    </div>
  );
}

function CostoDiscount() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] gap-[4px] h-full items-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" data-name="Costo discount">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Costo</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">4,89%</p>
      </div>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">399</p>
      </div>
    </div>
  );
}

function MoneyConfig1() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">-</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount1 />
    </div>
  );
}

function MoneyAmount1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig1 />
    </div>
  );
}

function Costo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="flex flex-row items-center self-stretch">
        <CostoDiscount />
      </div>
      <MoneyAmount1 />
    </div>
  );
}

function BodyCosto() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="body costo">
      <Costo />
    </div>
  );
}

function BodyCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Body card">
      <Adelantas />
      <BodyCosto />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <BodyCard />
      <Divider />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">7.763</p>
      </div>
    </div>
  );
}

function MoneyConfig2() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount2 />
    </div>
  );
}

function MoneyAmount2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig2 />
    </div>
  );
}

function Recibes() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Recibes">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Recibes</p>
      </div>
      <MoneyAmount2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Recibes />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Editar selección</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e9f1ff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[16px] py-[2px] relative rounded-[12px] shrink-0" data-name="Button">
      <IconLabel />
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Confirmar</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#434ce4] content-stretch flex h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[16px] py-[2px] relative rounded-[12px] shrink-0" data-name="Button">
      <IconLabel1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function TyC() {
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
          <span className="decoration-solid font-['Inter:Semi_Bold',sans-serif] leading-[12px] text-[#434ce4] underline" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          <span className="font-['Inter:Regular',sans-serif] leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            .
          </span>
        </p>
      </div>
      <Frame2 />
    </div>
  );
}

export default function UnaParte() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="una parte">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Titulo1 />
        <Frame />
        <TyC />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_2px_#dee9ff]" />
    </div>
  );
}