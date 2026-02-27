import svgPaths from "./svg-jtwq3xgzlj";
import alertSvgPaths from "./svg-g1vl3mu1h6";

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

function Frame1({ customText }: { customText?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[24px] justify-center relative shrink-0 text-[#282834] text-[16px] w-full" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-4hzbpn leading-[20px]">Tu adelanto recurrente</p>
      </div>
      <div className="flex flex-col font-['Inter',sans-serif] justify-center relative shrink-0 text-[#282834] text-[14px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[18px]">{customText || "Lo recibes todos los martes"}</p>
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
          <path d={svgPaths.p35038d00} fill="var(--fill-0, #9C9EBF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Handle() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]" data-name="Handle">
    <div aria-hidden="true" className="absolute border border-[#b5b9d4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    <FeedbackPositive />
  </div>
  );
}

function Control() {
  return (
    <div className="h-[20px] relative rounded-[9999px] shrink-0 w-[35px] bg-[#b5b9d4] opacity-50" data-name="Control">
      <div className="content-stretch flex items-center justify-end overflow-clip relative rounded-[inherit] size-full">
        <Handle />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b5b9d4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
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

function Frame({ customText }: { customText?: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 customText={customText} />
      <None0Px />
      <ListRowRightContentLarge />
      <None0Px />
    </div>
  );
}

function Frame2({ customText }: { customText?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame customText={customText} />
    </div>
  );
}

function Frame3({ customText }: { customText?: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Thumbnail />
      <Frame2 customText={customText} />
    </div>
  );
}

function FeedbackCaution() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Feedback caution">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Feedback caution">
          <g id="Vector">
            <path d={alertSvgPaths.p3a420580} fill="var(--fill-0, white)" />
            <path d={alertSvgPaths.p56c11f0} fill="var(--fill-0, white)" />
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
      <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative self-stretch text-[#282834] text-[14px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
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

function Textlink({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer" data-name="Textlink">
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[12px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[16px]">Revisar costo</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Action({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Action">
      <Textlink onClick={onClick} />
    </div>
  );
}

function Message({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#ffedc7] relative rounded-[20px] shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <Header />
        <Action onClick={onClick} />
      </div>
    </div>
  );
}

export default function ProgramadoCambioCondiciones({
  customText,
  onRevisarCostoClick,
}: {
  customText?: string;
  onRevisarCostoClick?: () => void;
}) {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="programado-cambio-condiciones">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame3 customText={customText} />
        <Message onClick={onRevisarCostoClick} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0)]" />
    </div>
  );
}