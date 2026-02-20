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

function Ignore1() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Tiny4Px() {
  return (
    <div className="content-stretch flex items-start pl-[4px] pt-[4px] relative shrink-0" data-name="Tiny (4px)">
      <Ignore1 />
    </div>
  );
}

function Ignore2() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft() {
  return (
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore2 />
    </div>
  );
}

function TitleRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[0px]" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`El costo varía entre el 0,35% y 13,50%. `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Semi_Bold',sans-serif] leading-[16px] not-italic text-[#434ce4] underline" style={{ fontFeatureSettings: "\'case\'" }}>
            Conoce cómo se calcula
          </span>
          <span className="leading-[16px]">
            {`. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`Al confirmar, aceptas los `}
          </span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Semi_Bold',sans-serif] leading-[16px] not-italic text-[#434ce4] underline" style={{ fontFeatureSettings: "\'case\'" }}>
            Términos y condiciones
          </span>
          <span className="leading-[16px]">.</span>
        </p>
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

function Ignore3() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingRight() {
  return (
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore3 />
    </div>
  );
}

function ListRow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[12px] relative rounded-[8px]" data-name="List row">
      <PaddingLeft />
      <Content />
      <PaddingRight />
    </div>
  );
}

function Ignore4() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Tiny4Px1() {
  return (
    <div className="content-stretch flex items-start pl-[4px] pt-[4px] relative shrink-0" data-name="Tiny (4px)">
      <Ignore4 />
    </div>
  );
}

function SlotContainerHPaddings() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Slot container h paddings">
      <Tiny4Px />
      <ListRow />
      <Tiny4Px1 />
    </div>
  );
}

function Ignore5() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function None0Px1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="None (0px)">
      <Ignore5 />
    </div>
  );
}

function SlotContainerVPaddings() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Slot container v paddings">
      <None0Px />
      <SlotContainerHPaddings />
      <None0Px1 />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Icon & Label">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#434ce4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[18px] overflow-hidden">{`Encender `}</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e9f1ff] h-[48px] max-h-[48px] min-h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
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

function Actions() {
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
      <Actions />
    </div>
  );
}

export default function AdelantosRecurrenteFooterMadre() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Adelantos/Recurrente/Footer/Madre">
      <FixedFooter />
    </div>
  );
}