import svgPaths from "./svg-j488ubgob4";

function Close() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <path d={svgPaths.p3564a900} fill="#434CE4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#e9f1ff] flex items-center justify-center size-[40px] rounded-[12px] shrink-0 cursor-pointer hover:bg-[#d4e4ff] transition-colors"
      data-name="Icon button"
    >
      <Close />
    </div>
  );
}

function Header({ onCloseClick }: { onCloseClick?: () => void }) {
  return (
    <div className="h-[64px] shrink-0 w-full flex items-center justify-end px-[16px]" data-name="Header">
      <IconButton onClick={onCloseClick} />
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="absolute inset-[11.11%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <path d={svgPaths.p32327d00} fill="white" />
      </svg>
    </div>
  );
}

function SuccessCircle() {
  return (
    <div className="bg-[#1f8923] relative rounded-[9999px] shrink-0 size-[72px]" data-name="Feedback">
      <CheckIcon />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-1 overflow-auto">
      {/* 64px spacer para a área do header (StatusBar 52px + margem) */}
      <div className="h-[64px]" />
      <div className="px-[16px] pt-[56px] pb-[32px] flex flex-col gap-[16px]">
        <SuccessCircle />
        <div className="flex flex-col gap-[8px]">
          <p
            className="font-['Inter',sans-serif] font-bold text-[24px] leading-[28px] text-[#282834]"
            style={{ fontFeatureSettings: "'case'" }}
          >
            Tu dinero está en camino
          </p>
          <div
            className="font-['Inter',sans-serif] text-[16px] leading-[20px] text-[#282834] flex flex-col gap-[16px]"
            style={{ fontFeatureSettings: "'case'" }}
          >
            <p>Te avisaremos cuando lo tengas en tu cuenta de Mercado Pago.</p>
            <p>Si alguna de tus ventas se liberó antes de confirmar el adelanto, el monto que recibirás será menor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ onIrAlInicioClick }: { onIrAlInicioClick?: () => void }) {
  return (
    <div className="shrink-0 bg-white px-[16px] py-[16px]" data-name="Fixed footer">
      <div
        onClick={onIrAlInicioClick}
        className="bg-[#434ce4] h-[48px] rounded-[12px] w-full flex items-center justify-center cursor-pointer hover:bg-[#3840d0] transition-colors"
        data-name="Button"
      >
        <span
          className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[18px] text-white"
          style={{ fontFeatureSettings: "'case'" }}
        >
          Ir al inicio
        </span>
      </div>
    </div>
  );
}

export default function FeedbackScreen({
  onCloseClick,
  onIrAlInicioClick,
}: {
  onCloseClick?: () => void;
  onIrAlInicioClick?: () => void;
}) {
  return (
    <div className="bg-white size-full flex flex-col overflow-hidden relative" data-name="Feedback screen">
      <Content />
      <Footer onIrAlInicioClick={onIrAlInicioClick} />
      {/* Botão fechar — posicionado abaixo da StatusBar (52px) */}
      <div className="absolute top-[64px] right-[16px] z-10">
        <IconButton onClick={onCloseClick} />
      </div>
    </div>
  );
}
