import svgPaths from "./svg-jtwq3xgzlj";
import errorSvgPaths from "./svg-2mpyh076ax";

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
          <path d={svgPaths.p35038d00} fill="var(--fill-0, #434CE4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Handle({ isOn }: { isOn: boolean }) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]" data-name="Handle">
      <div aria-hidden="true" className={`absolute border ${isOn ? "border-[#434ce4]" : "border-[#8788ab]"} border-solid inset-0 pointer-events-none rounded-[9999px]`} />
      {isOn && <FeedbackPositive />}
    </div>
  );
}

function Control({ isOn, onClick }: { isOn: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`h-[20px] relative rounded-[9999px] shrink-0 w-[35px] cursor-pointer transition-colors ${isOn ? "bg-[#434ce4]" : "bg-[#d0d4e6]"}`}
      data-name="Control"
    >
      <div className={`content-stretch flex items-center ${isOn ? "justify-end" : "justify-start"} overflow-clip relative rounded-[inherit] size-full`}>
        <Handle isOn={isOn} />
      </div>
      <div
        aria-hidden="true"
        className={`absolute border ${isOn ? "border-[#434ce4]" : "border-[#d0d4e6]"} border-solid inset-0 pointer-events-none rounded-[9999px] ${isOn ? "shadow-[0px_0px_0px_2px_#dee9ff]" : ""}`}
      />
    </div>
  );
}

function Switch({ isOn, onToggle }: { isOn: boolean; onToggle?: () => void }) {
  return (
    <div className="content-stretch flex items-start px-0 py-[2px] relative shrink-0" data-name="Switch">
      <Control isOn={isOn} onClick={onToggle} />
    </div>
  );
}

function ListRowRightContentLarge({ isOn, onToggle }: { isOn: boolean; onToggle?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="_List row/right content large">
      <Switch isOn={isOn} onToggle={onToggle} />
    </div>
  );
}

function Frame({ customText, isOn, onToggle }: { customText?: string; isOn: boolean; onToggle?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 customText={customText} />
      <None0Px />
      <ListRowRightContentLarge isOn={isOn} onToggle={onToggle} />
      <None0Px />
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

function Textlink({ onClick, text }: { onClick?: () => void; text?: string }) {
  return (
    <div
      onClick={onClick}
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer"
      data-name="Textlink"
    >
      <div className="css-g0mm18 flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'", fontWeight: 600 }}>
        <p className="css-ew64yg leading-[18px]">{text || "Ver detalles"}</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function FeedbackError() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Feedback error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Feedback error">
          <path d={errorSvgPaths.p13efcf80} fill="var(--fill-0, white)" id="Vector" />
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

function ErrorHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <BadgeContainer />
      <div className="flex flex-[1_0_0] flex-col font-['Inter',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative self-stretch text-[#282834] text-[14px] text-ellipsis" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[18px]">No pudimos realizar tu adelanto por un error. Volveremos a intentarlo en la próxima fecha.</p>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className="bg-[#ffe5e9] relative rounded-[20px] shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <ErrorHeader />
      </div>
    </div>
  );
}

function Frame2({ customText, isOn, onToggle, onModificarClick }: { customText?: string; isOn: boolean; onToggle?: () => void; onModificarClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame customText={customText} isOn={isOn} onToggle={onToggle} />
      <Textlink onClick={onModificarClick} text="Modificar" />
    </div>
  );
}

function Conteudo({ customText, isOn, onToggle, onModificarClick }: { customText?: string; isOn: boolean; onToggle?: () => void; onModificarClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="conteudo">
      <Thumbnail />
      <Frame2 customText={customText} isOn={isOn} onToggle={onToggle} onModificarClick={onModificarClick} />
    </div>
  );
}

export default function Programado({
  customText,
  isOn = true,
  onToggle,
  onModificarClick,
  showErrorMessage = false,
}: {
  customText?: string;
  isOn?: boolean;
  onToggle?: () => void;
  onModificarClick?: () => void;
  showErrorMessage?: boolean;
}) {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="programado">
      <div className={`content-stretch flex ${showErrorMessage ? 'flex-col gap-[16px]' : 'gap-[16px]'} items-start overflow-clip p-[16px] relative rounded-[inherit] size-full`}>
        <Conteudo customText={customText} isOn={isOn} onToggle={onToggle} onModificarClick={onModificarClick} />
        {showErrorMessage && <ErrorMessage />}
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e6] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0)]" />
    </div>
  );
}