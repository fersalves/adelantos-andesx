import svgPaths from "./svg-jzruip7k6g";

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
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Back button">
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
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Icon button">
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
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] min-h-[40px] py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Icon button">
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

function Amount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[28px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[34px]">50.000.000</p>
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
        <p className="css-ew64yg leading-[20px]">Adelantar</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function CardInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[328px]" data-name="Card Info">
      <Frame3 />
      <Textlink />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <CardInfo />
    </div>
  );
}

function RecurringPayments() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Recurring payments">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Recurring payments">
          <g id="Vector">
            <path d={svgPaths.p22c44580} fill="var(--fill-0, #434CE4)" />
            <path d={svgPaths.p245e7a20} fill="var(--fill-0, #434CE4)" />
            <path d={svgPaths.p28c6b000} fill="var(--fill-0, #434CE4)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="bg-[#e9f1ff] content-stretch flex h-[32px] items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[9999px] shrink-0" data-name="Thumbnail">
      <RecurringPayments />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] h-[24px] justify-center relative shrink-0 text-[16px] text-black w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[20px]">Adelanto recurrente</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] h-[24px] justify-center relative shrink-0 text-[#282834] text-[14px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[18px]">Lo recibes todos los lunes</p>
      </div>
    </div>
  );
}

function Ignore() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function None0Px() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="None (0px)">
      <Ignore />
    </div>
  );
}

function FeedbackPositive() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Feedback positive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Feedback positive">
          <path d={svgPaths.p35038d00} fill="var(--fill-0, #434CE4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Handle() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]" data-name="Handle">
      <div aria-hidden="true" className="absolute border border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <FeedbackPositive />
    </div>
  );
}

function Control() {
  return (
    <div className="bg-[#434ce4] h-[20px] relative rounded-[9999px] shrink-0 w-[35px]" data-name="Control">
      <div className="content-stretch flex items-center justify-end overflow-clip relative rounded-[inherit] size-full">
        <Handle />
      </div>
      <div aria-hidden="true" className="absolute border border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_0px_2px_#dee9ff]" />
    </div>
  );
}

function Switch() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative shrink-0" data-name="Switch">
      <Control />
    </div>
  );
}

function ListRowRightContentLarge() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="_List row/right content large">
      <Switch />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame5 />
      <None0Px />
      <ListRowRightContentLarge />
      <None0Px />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow right">
          <path d={svgPaths.p1f04f180} fill="var(--fill-0, #434CE4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Textlink1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Textlink">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Modificar</p>
      </div>
      <ArrowRight1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame4 />
      <Textlink1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Thumbnail />
      <Frame6 />
    </div>
  );
}

function FeedbackError() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Feedback error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Feedback error">
          <path d={svgPaths.p13efcf80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon() {
  return (
    <div className="bg-[#c4031d] content-stretch flex items-center justify-center max-h-[20px] max-w-[20px] min-h-[20px] min-w-[20px] relative rounded-[9999px] shrink-0 size-[20px]" data-name="Badge icon">
      <FeedbackError />
    </div>
  );
}

function BadgeContainer() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-name="Badge container">
      <BadgeIcon />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <BadgeContainer />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative self-stretch text-[#282834] text-[14px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[18px]">No pudimos realizar tu adelanto por un error. Volveremos a intentarlo en la próxima fecha.</p>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="bg-[#ffe5e9] relative rounded-[20px] shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Header2 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[328px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] w-full">
        <Frame7 />
        <Message />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0)]" />
    </div>
  );
}

function MercadoCredit() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Mercado credit">
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
      <p className="css-4hzbpn font-['Inter:regular',sans-serif] leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#252537] text-[14px] text-ellipsis w-full">Obtén hasta $ 1.500.000 y devuélvelo en 7, 14, 21 o 28 días.</p>
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
      <div className="css-g0mm18 flex flex-col font-['Inter:semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4850e5] text-[14px] text-right">
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
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <ListRowSimple />
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
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] leading-[22px] not-italic overflow-hidden relative shrink-0 text-[#282834] text-[18px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
        ¿Necesitas más dinero?
      </p>
      <CardSection />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[16px] relative size-full">
        <Frame2 />
        <Card />
        <Cross />
      </div>
    </div>
  );
}

export default function Admin() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Admin">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[24px] relative rounded-[inherit] size-full">
        <Frame1 />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
    </div>
  );
}