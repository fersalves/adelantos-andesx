import svgPaths from "./svg-a44kuo30zz";

function Amount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">1.000</p>
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

function Info() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Info">
          <g id="Vector">
            <path d={svgPaths.p15320700} fill="var(--fill-0, #434CE4)" />
            <path d={svgPaths.p35066680} fill="var(--fill-0, #434CE4)" />
            <path clipRule="evenodd" d={svgPaths.p3b9a5f80} fill="var(--fill-0, #434CE4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CostoDiscount() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-name="Costo discount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Costo</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">3,24%</p>
      </div>
      <Info />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">1.000</p>
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
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="flex flex-row items-end self-stretch">
        <CostoDiscount />
      </div>
      <MoneyAmount1 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">1.000</p>
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

function Costo1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Recibes</p>
      </div>
      <MoneyAmount2 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Body">
      <Adelantas />
      <Costo />
      <Costo1 />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Seleccionar</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#434ce4] h-[40px] max-h-[40px] min-h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[2px] relative size-full">
          <IconLabel />
        </div>
      </div>
    </div>
  );
}

export default function Cuenta() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] size-full" data-name="cuenta">
      <Body />
      <Button />
    </div>
  );
}