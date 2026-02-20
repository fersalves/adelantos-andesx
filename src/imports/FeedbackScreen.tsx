import svgPaths from "./svg-j488ubgob4";

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <path d={svgPaths.p3564a900} fill="var(--fill-0, #434CE4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#e9f1ff] content-stretch flex items-center justify-center max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px] px-0 py-[2px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Icon button">
      <Close />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[16px] py-[12px] relative size-full">
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[11.11%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon">
          <path d={svgPaths.p32327d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Feedback() {
  return (
    <div className="bg-[#1f8923] relative rounded-[9999px] shrink-0 size-[72px]" data-name="Feedback">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#646587] text-[16px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        ¡Listo!
      </p>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#282834] text-[24px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[28px]">Tu dinero está en camino</p>
      </div>
      <div className="font-['Inter:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#282834] text-[0px] text-[16px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn mb-[16px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] not-italic" style={{ fontFeatureSettings: "'case'" }}>
            Te avisaremos cuando lo recibas en tu cuenta
          </span>
          <span>{` de Mercado Pago.`}</span>
        </p>
        <p className="css-4hzbpn">Si alguna de tus ventas se liberó antes de confirmar el adelanto, el monto que recibirás será menor.</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <Feedback />
      <Text />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 relative w-full">
        <Header1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[56px] px-0 relative shrink-0 w-full" data-name="Container">
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start left-0 right-0 top-0 pb-[100px]" data-name="Content">
      <Header />
      <Container />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Ir al inicio</p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#434ce4] h-[48px] max-h-[48px] min-h-[48px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#3840d0] transition-colors"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[24px] py-[2px] relative size-full">
          <IconLabel />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button group">
      <Button onClick={onClick} />
    </div>
  );
}

function Actions({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative w-full">
          <ButtonGroup onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

function FixedFooter({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 right-0" data-name="Fixed footer">
      <Actions onClick={onClick} />
    </div>
  );
}

export default function FeedbackScreen({ onIrAlInicioClick }: { onIrAlInicioClick?: () => void }) {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_0px_12px_0px_rgba(40,40,52,0.1)] size-full flex flex-col overflow-hidden" data-name="Feedback screen">
      <div className="flex-1 overflow-auto">
        <Content1 />
      </div>
      <FixedFooter onClick={onIrAlInicioClick} />
    </div>
  );
}