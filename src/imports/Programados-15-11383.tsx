import svgPaths from "./svg-82e7ky1mx3";

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
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Back button">
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

function Header() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Back />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#282834] text-[16px] text-center text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
            <p className="css-g0mm18 leading-[20px] overflow-hidden">&nbsp;</p>
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
            Elige la frecuencia de tu adelanto recurrente
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header">
      <StatusBarAndroid />
      <Header1 />
    </div>
  );
}

function Ignore() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore />
    </div>
  );
}

function TitleRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[16px]">Todos los días</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Content">
      <TitleRow />
    </div>
  );
}

function Ignore1() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingRight() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore1 />
    </div>
  );
}

function ListRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px px-0 py-[12px] relative rounded-[8px]" data-name="List row">
      <PaddingLeft />
      <Content />
      <PaddingRight />
    </div>
  );
}

function Selector() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 1">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <ListRow />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_2px_#dee9ff]" />
    </div>
  );
}

function Ignore2() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Small8Px() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[8px] pr-0 pt-[8px] relative shrink-0" data-name="Small (8px)">
      <Ignore2 />
    </div>
  );
}

function Ignore3() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft1() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore3 />
    </div>
  );
}

function TitleRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[16px]">Una vez a la semana</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Content">
      <TitleRow1 />
    </div>
  );
}

function Ignore4() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingRight1() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore4 />
    </div>
  );
}

function ListRow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px px-0 py-[12px] relative rounded-[8px]" data-name="List row">
      <PaddingLeft1 />
      <Content1 />
      <PaddingRight1 />
    </div>
  );
}

function Selector1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 2">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <ListRow1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Ignore5() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft2() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore5 />
    </div>
  );
}

function TitleRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[16px]">Una vez cada 15 días</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Content">
      <TitleRow2 />
    </div>
  );
}

function Ignore6() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingRight2() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore6 />
    </div>
  );
}

function ListRow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px px-0 py-[12px] relative rounded-[8px]" data-name="List row">
      <PaddingLeft2 />
      <Content2 />
      <PaddingRight2 />
    </div>
  );
}

function Selector2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 3">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <ListRow2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Selector />
      <Small8Px />
      <Selector1 />
      <Small8Px />
      <Selector2 />
    </div>
  );
}

function BoxSelector() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Box selector">
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <BoxSelector />
    </div>
  );
}

function Frequencia() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="frequencia">
      <Frame />
    </div>
  );
}

function Ignore7() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft3() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[16px] pr-0 pt-[16px] relative shrink-0" data-name="Padding left">
      <Ignore7 />
    </div>
  );
}

function TitleRow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[0px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[16px] text-[12px]">
          <span>{`Recibirás tu dinero `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] not-italic" style={{ fontFeatureSettings: "'case'" }}>
            todos los días entre las 8:00 y 11:00am
          </span>
          <span>{` (hora centro).`}</span>
        </p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Content">
      <TitleRow3 />
    </div>
  );
}

function Ignore8() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingRight3() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[16px] pr-0 pt-[16px] relative shrink-0" data-name="Padding right">
      <Ignore8 />
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-0 py-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <PaddingLeft3 />
      <Content3 />
      <PaddingRight3 />
    </div>
  );
}

function CardDetallesDelRecibimiento() {
  return (
    <div className="bg-[#f4f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Card detalles del recibimiento">
      <Content4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frequencia />
      <CardDetallesDelRecibimiento />
    </div>
  );
}

function Selectores() {
  return (
    <div className="relative shrink-0 w-full" data-name="selectores">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-0 relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="body">
      <Header2 />
      <Selectores />
    </div>
  );
}

function Ignore9() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function None0Px() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="None (0px)">
      <Ignore9 />
    </div>
  );
}

function Ignore10() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Tiny4Px() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[4px] pr-0 pt-[4px] relative shrink-0" data-name="Tiny (4px)">
      <Ignore10 />
    </div>
  );
}

function Ignore11() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft4() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore11 />
    </div>
  );
}

function TitleRow4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#646587] text-[0px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[16px] text-[12px]">
          <span>{`El costo varía entre el 0,35% y 13,50%. `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Semi_Bold',sans-serif] not-italic text-[#434ce4] underline" style={{ fontFeatureSettings: "'case'" }}>
            Conoce cómo
            <br aria-hidden="true" />
            se calcula
          </span>
          <span>
            {`. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`Al confirmar, aceptas los `}
          </span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Semi_Bold',sans-serif] not-italic text-[#434ce4] underline" style={{ fontFeatureSettings: "'case'" }}>
            Términos y condiciones
          </span>
          .
        </p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Content">
      <TitleRow4 />
    </div>
  );
}

function Ignore12() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingRight4() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[12px] pr-0 pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore12 />
    </div>
  );
}

function ListRow3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px px-0 py-[12px] relative rounded-[8px]" data-name="List row">
      <PaddingLeft4 />
      <Content5 />
      <PaddingRight4 />
    </div>
  );
}

function SlotContainerHPaddings() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Slot container h paddings">
      <Tiny4Px />
      <ListRow3 />
      <Tiny4Px />
    </div>
  );
}

function SlotContainerVPaddings() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot container v paddings">
      <None0Px />
      <SlotContainerHPaddings />
      <None0Px />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Confirmar programación</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#434ce4] h-[48px] max-h-[48px] min-h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[24px] py-[2px] relative size-full">
          <IconLabel />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button group">
      <Button />
    </div>
  );
}

function Actions1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

function FixedFooter() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Fixed footer">
      <SlotContainerVPaddings />
      <Actions1 />
    </div>
  );
}

export default function Programados() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[16px] size-full" data-name="Programados">
      <Body />
      <FixedFooter />
    </div>
  );
}