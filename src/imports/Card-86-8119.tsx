import svgPaths from "./svg-g1vl3mu1h6";

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

function Frame1() {
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

function Handle() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[20px]" data-name="Handle">
      <div aria-hidden="true" className="absolute border border-[#b5b9d4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Control() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center relative rounded-[9999px] shrink-0 w-[35px]" data-name="Control">
      <div aria-hidden="true" className="absolute border border-[#b5b9d4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Handle />
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 />
      <None0Px />
      <ListRowRightContentLarge />
      <None0Px />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Thumbnail />
      <Frame2 />
    </div>
  );
}

function FeedbackCaution() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Feedback caution">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Feedback caution">
          <g id="Vector">
            <path d={svgPaths.p3a420580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p56c11f0} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon() {
  return (
    <div className="bg-[#d74009] content-stretch flex items-center justify-center max-h-[20px] max-w-[20px] min-h-[20px] min-w-[20px] relative rounded-[9999px] shrink-0 size-[20px]" data-name="Badge icon">
      <FeedbackCaution />
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

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <BadgeContainer />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative self-stretch text-[#282834] text-[14px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[18px]">Acepta el nuevo costo para volver a encender tu adelanto.</p>
      </div>
    </div>
  );
}

function ArrowRight() {
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

function Textlink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Textlink">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[12px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[16px]">Revisar costo</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Action">
      <Textlink />
    </div>
  );
}

function Message() {
  return (
    <div className="bg-[#ffedc7] relative rounded-[20px] shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Header />
        <Action />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame3 />
        <Message />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0)]" />
    </div>
  );
}