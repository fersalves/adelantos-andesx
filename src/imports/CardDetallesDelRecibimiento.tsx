function Ignore() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Large16Px() {
  return (
    <div className="content-stretch flex items-start pl-[16px] pt-[16px] relative shrink-0" data-name="Large (16px)">
      <Ignore />
    </div>
  );
}

function Corners() {
  return <div className="bg-[#d74009] rounded-[9999px] size-full" data-name="Corners" />;
}

function BadgePill() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center max-h-[16px] min-h-[16px] min-w-[16px] px-[6px] relative shrink-0" data-name="Badge pill">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="-scale-y-100 flex-none h-[16px] rotate-180 w-[57px]">
          <Corners />
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[10px] text-center text-white" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[12px] whitespace-pre-wrap">En pausa</p>
      </div>
    </div>
  );
}

function ListRowRightContentSmall() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="_List row/right content small">
      <BadgePill />
    </div>
  );
}

function TitleRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[0px]" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Lo recibes `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] leading-[16px] not-italic" style={{ fontFeatureSettings: "\'case\'" }}>
            todos los días entre las 8:00 y 11:00am
          </span>
          <span className="leading-[16px]">{` (hora centro).`}</span>
        </p>
      </div>
      <ListRowRightContentSmall />
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

function Large16Px1() {
  return (
    <div className="content-stretch flex items-start pl-[16px] pt-[16px] relative shrink-0" data-name="Large (16px)">
      <Ignore1 />
    </div>
  );
}

function ListRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start py-[16px] relative rounded-[8px] shrink-0 w-full" data-name="List row">
      <Large16Px />
      <Content />
      <Large16Px1 />
    </div>
  );
}

function CardDetallesDelRecibimiento1() {
  return (
    <div className="bg-[#f4f5f9] content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Card detalles del recibimiento">
      <ListRow />
    </div>
  );
}

export default function CardDetallesDelRecibimiento() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Card detalles del recibimiento">
      <CardDetallesDelRecibimiento1 />
    </div>
  );
}