import svgPaths from "./svg-dmjhfg4aju";

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

function BackButton() {
  return (
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Back button">
      <ChevronLeft />
    </div>
  );
}

function Back() {
  return (
    <div className="content-stretch flex gap-[8px] items-start min-w-[40px] relative shrink-0" data-name="Back">
      <BackButton />
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
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Icon button">
      <Helper />
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Action 2">
      <IconButton />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end max-h-[40px] relative shrink-0" data-name="Actions">
      <Action1 />
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
            Elige cuánto adelantar
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

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-[360px]" data-name="Header">
      <StatusBarAndroid />
      <Header1 />
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
        <p className="css-ew64yg leading-[20px]">Total disponible</p>
      </div>
    </div>
  );
}

function RadioButtonTick() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[9999px]" data-name="Radio button/Tick" />;
}

function Control() {
  return (
    <div className="bg-[#434ce4] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_#dee9ff] shrink-0 size-[20px]" data-name="Control">
      <RadioButtonTick />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Radio button">
      <Control />
    </div>
  );
}

function Titulo1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Titulo">
      <Titulo />
      <RadioButton />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">10.000</p>
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

function Amount1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">211</p>
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

function Costo1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646587] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[16px]">(IVA incluido)</p>
      </div>
    </div>
  );
}

function BodyCosto() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="body costo">
      <Costo />
      <Costo1 />
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

function Amount2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">9.789</p>
      </div>
    </div>
  );
}

function MoneyConfig2() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">$</p>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">Recibes</p>
      </div>
      <MoneyAmount2 />
    </div>
  );
}

function Recibes1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Recibes">
      <Divider />
      <Recibes />
      <Divider />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[16px]">Confirmar</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#434ce4] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[12px] py-[2px] relative rounded-[8px] shrink-0" data-name="Button">
      <IconLabel />
    </div>
  );
}

function TyC() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="TyC">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[rgba(0,0,0,0.9)]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn text-[10px]">
          <span className="leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>{`Al confirmar, aceptas los `}</span>
          <span className="leading-[12px] text-[#434ce4]" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          <span className="leading-[12px] text-[#646587]" style={{ fontFeatureSettings: "'case'" }}>
            .
          </span>
        </p>
      </div>
      <Button />
    </div>
  );
}

function Total() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[328px]" data-name="total">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Titulo1 />
        <BodyCard />
        <Recibes1 />
        <TyC />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_2px_#dee9ff]" />
    </div>
  );
}

function PlaceholderImage() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Placeholder Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Placeholder Image">
          <g id="Vector">
            <path d={svgPaths.p98589c0} fill="var(--fill-0, #282834)" />
            <path clipRule="evenodd" d={svgPaths.p214a8900} fill="var(--fill-0, #282834)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Titulo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="titulo">
      <PlaceholderImage />
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">Una parte del total</p>
      </div>
    </div>
  );
}

function Control1() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[20px]" data-name="Control">
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Radio button">
      <Control1 />
    </div>
  );
}

function Titulo3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Titulo">
      <Titulo2 />
      <RadioButton1 />
    </div>
  );
}

function Titulo4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Titulo">
      <Titulo3 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">8.162</p>
      </div>
    </div>
  );
}

function MoneyConfig3() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount3 />
    </div>
  );
}

function MoneyAmount3() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig3 />
    </div>
  );
}

function Adelantas1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Adelantas">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Adelantas</p>
      </div>
      <MoneyAmount3 />
    </div>
  );
}

function CostoDiscount1() {
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

function Amount4() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">399</p>
      </div>
    </div>
  );
}

function MoneyConfig4() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">-</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount4 />
    </div>
  );
}

function MoneyAmount4() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig4 />
    </div>
  );
}

function Costo2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="flex flex-row items-center self-stretch">
        <CostoDiscount1 />
      </div>
      <MoneyAmount4 />
    </div>
  );
}

function BodyCosto1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="body costo">
      <Costo2 />
    </div>
  );
}

function BodyCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Body card">
      <Adelantas1 />
      <BodyCosto1 />
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-px max-h-px min-h-px relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">7.763</p>
      </div>
    </div>
  );
}

function MoneyConfig5() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">$</p>
      </div>
      <Amount5 />
    </div>
  );
}

function MoneyAmount5() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig5 />
    </div>
  );
}

function Recibes2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Recibes">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[16px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[20px]">Recibes</p>
      </div>
      <MoneyAmount5 />
    </div>
  );
}

function Recibes3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Recibes">
      <Divider1 />
      <Recibes2 />
    </div>
  );
}

function Parcial() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[328px]" data-name="parcial">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <Titulo4 />
        <BodyCard1 />
        <Recibes3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px min-w-px px-[16px] relative w-[360px]" data-name="Content Container">
      <Total />
      <Parcial />
    </div>
  );
}

function Dimmer() {
  return <div className="absolute bg-[rgba(40,40,52,0.6)] inset-0" data-name="Dimmer" />;
}

function Dimmer1() {
  return (
    <div className="absolute h-[800px] left-0 top-0 w-[360px]" data-name="_Dimmer">
      <Dimmer />
    </div>
  );
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

function Title1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#282834] text-[18px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[22px]">Selecciona el día o periodo que quieres adelantar</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[8px] py-[8px] relative w-full">
        <Title1 />
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

function DismissButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Dismiss button">
      <Close />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Action">
      <DismissButton />
    </div>
  );
}

function Dismiss() {
  return (
    <div className="content-stretch flex items-start justify-end pb-[8px] pl-[4px] pt-[4px] relative self-stretch shrink-0" data-name="Dismiss">
      <Action />
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Controls">
      <Content />
      <Ignore />
      <Dismiss />
    </div>
  );
}

function Header3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative w-full">
          <Controls />
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-[360px]" data-name="Header">
      <DragIndicator />
      <Header3 />
    </div>
  );
}

function Mes() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mes">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[12px] pt-[20px] px-[12px] relative w-full">
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#646587] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            Abril
          </p>
        </div>
      </div>
    </div>
  );
}

function Day() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        LUN
      </p>
    </div>
  );
}

function Day1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MAR
      </p>
    </div>
  );
}

function Day2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MIÉ
      </p>
    </div>
  );
}

function Day3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        JUE
      </p>
    </div>
  );
}

function Day4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        VIE
      </p>
    </div>
  );
}

function Day5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        SÁB
      </p>
    </div>
  );
}

function Day6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        DOM
      </p>
    </div>
  );
}

function DiaSemana() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Dia semana">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
    </div>
  );
}

function InfoMes() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[336px]" data-name="Info mes">
      <Mes />
      <DiaSemana />
    </div>
  );
}

function Day7() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
    </div>
  );
}

function Day8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        2
      </p>
    </div>
  );
}

function Day9() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        3
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        4
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        5
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        6
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Semana() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day7 />
      <Day8 />
      <Day9 />
      <Day10 />
      <Day11 />
      <Day12 />
    </div>
  );
}

function Day13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        7
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        8
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        9
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        10
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        11
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        12
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        13
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Semana1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] items-end not-italic relative shrink-0 text-center" data-name="Semana">
      <Day13 />
      <Day14 />
      <Day15 />
      <Day16 />
      <Day17 />
      <Day18 />
      <Day19 />
    </div>
  );
}

function Day20() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        14
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day21() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        15
      </p>
    </div>
  );
}

function Day22() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        16
      </p>
    </div>
  );
}

function Day23() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        17
      </p>
    </div>
  );
}

function Day24() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        18
      </p>
    </div>
  );
}

function Day25() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        19
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day26() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        20
      </p>
    </div>
  );
}

function Semana2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day20 />
      <Day21 />
      <Day22 />
      <Day23 />
      <Day24 />
      <Day25 />
      <Day26 />
    </div>
  );
}

function Day27() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
    </div>
  );
}

function Day28() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Semana3() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day27 />
      <Day27 />
      <Day27 />
      {[...Array(3).keys()].map((_, i) => (
        <Day28 key={i} />
      ))}
      <Day27 />
    </div>
  );
}

function Day29() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        28
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day30() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        29
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day31() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        30
      </p>
    </div>
  );
}

function Semana4() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day29 />
      <Day30 />
      <Day31 />
    </div>
  );
}

function Mes1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[336px]" data-name="Mes">
      <InfoMes />
      <Semana />
      <Semana1 />
      <Semana2 />
      <Semana3 />
      <Semana4 />
    </div>
  );
}

function Mes2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mes">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[12px] pt-[20px] px-[12px] relative w-full">
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#646587] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            Mayo
          </p>
        </div>
      </div>
    </div>
  );
}

function Day32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        LUN
      </p>
    </div>
  );
}

function Day33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MAR
      </p>
    </div>
  );
}

function Day34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MIÉ
      </p>
    </div>
  );
}

function Day35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        JUE
      </p>
    </div>
  );
}

function Day36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        VIE
      </p>
    </div>
  );
}

function Day37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        SÁB
      </p>
    </div>
  );
}

function Day38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        DOM
      </p>
    </div>
  );
}

function DiaSemana1() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Dia semana">
      <Day32 />
      <Day33 />
      <Day34 />
      <Day35 />
      <Day36 />
      <Day37 />
      <Day38 />
    </div>
  );
}

function InfoMes1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[336px]" data-name="Info mes">
      <Mes2 />
      <DiaSemana1 />
    </div>
  );
}

function Day39() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
    </div>
  );
}

function Day40() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        2
      </p>
    </div>
  );
}

function Day41() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        3
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day42() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        4
      </p>
    </div>
  );
}

function Semana5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Semana">
      <Day39 />
      <Day40 />
      <Day41 />
      <Day42 />
    </div>
  );
}

function Day43() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        5
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day44() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        6
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day45() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        7
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day46() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        8
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day47() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        9
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day48() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        10
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day49() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        11
      </p>
    </div>
  );
}

function Semana6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day43 />
      <Day44 />
      <Day45 />
      <Day46 />
      <Day47 />
      <Day48 />
      <Day49 />
    </div>
  );
}

function Day50() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        12
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day51() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        13
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day52() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        14
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day53() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        15
      </p>
    </div>
  );
}

function Day54() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        16
      </p>
    </div>
  );
}

function Day55() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        17
      </p>
    </div>
  );
}

function Day56() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        18
      </p>
    </div>
  );
}

function Semana7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day50 />
      <Day51 />
      <Day52 />
      <Day53 />
      <Day54 />
      <Day55 />
      <Day56 />
    </div>
  );
}

function Day57() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        19
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day58() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        20
      </p>
    </div>
  );
}

function Day59() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        21
      </p>
    </div>
  );
}

function Day60() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        22
      </p>
    </div>
  );
}

function Day61() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        23
      </p>
    </div>
  );
}

function Day62() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        24
      </p>
    </div>
  );
}

function Day63() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        25
      </p>
    </div>
  );
}

function Semana8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day57 />
      <Day58 />
      <Day59 />
      <Day60 />
      <Day61 />
      <Day62 />
      <Day63 />
    </div>
  );
}

function Day64() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        26
      </p>
    </div>
  );
}

function Day65() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        27
      </p>
    </div>
  );
}

function Day66() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        28
      </p>
    </div>
  );
}

function Day67() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        29
      </p>
    </div>
  );
}

function Day68() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        30
      </p>
    </div>
  );
}

function Day69() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        31
      </p>
    </div>
  );
}

function Semana9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day64 />
      <Day65 />
      <Day66 />
      <Day67 />
      <Day68 />
      <Day69 />
    </div>
  );
}

function Mes3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[336px]" data-name="Mes">
      <InfoMes1 />
      <Semana5 />
      <Semana6 />
      <Semana7 />
      <Semana8 />
      <Semana9 />
    </div>
  );
}

function Component2Meses() {
  return (
    <div className="content-stretch flex flex-col h-[458px] items-center overflow-x-clip overflow-y-auto pt-[16px] relative shrink-0 w-[360px]" data-name="2 meses">
      <Mes1 />
      <Mes3 />
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9c9ebf] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Seleccionar</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#d0d4e6] h-[40px] max-h-[40px] min-h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[2px] relative size-full">
          <IconLabel1 />
        </div>
      </div>
    </div>
  );
}

function Cuenta() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] shrink-0 w-[360px]" data-name="cuenta">
      <Button1 />
    </div>
  );
}

function BottomSheetNoModal() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 overflow-clip rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)]" data-name="Bottom sheet no modal">
      <Header4 />
      <Component2Meses />
      <Cuenta />
    </div>
  );
}

export default function ShiftSpace() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="shift + space">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header2 />
        <ContentContainer />
        <Dimmer1 />
        <BottomSheetNoModal />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}