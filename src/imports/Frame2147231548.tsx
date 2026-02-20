function Ignore() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft() {
  return (
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore />
    </div>
  );
}

function TitleRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Todos los días</p>
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
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore1 />
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

function Selector() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 1">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <ListRow />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Ignore2() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Small8Px() {
  return (
    <div className="content-stretch flex items-start pl-[8px] pt-[8px] relative shrink-0" data-name="Small (8px)">
      <Ignore2 />
    </div>
  );
}

function Ignore3() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft1() {
  return (
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore3 />
    </div>
  );
}

function TitleRow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Una vez a la semana</p>
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
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore4 />
    </div>
  );
}

function ListRow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[12px] relative rounded-[8px]" data-name="List row">
      <PaddingLeft1 />
      <Content1 />
      <PaddingRight1 />
    </div>
  );
}

function Selector1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 2">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <ListRow1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_2px_#dee9ff]" />
    </div>
  );
}

function Ignore5() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Small8Px1() {
  return (
    <div className="content-stretch flex items-start pl-[8px] pt-[8px] relative shrink-0" data-name="Small (8px)">
      <Ignore5 />
    </div>
  );
}

function Ignore6() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingLeft2() {
  return (
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding left">
      <Ignore6 />
    </div>
  );
}

function TitleRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title row">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch text-[#282834] text-[12px]" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Una vez cada 15 días</p>
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

function Ignore7() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function PaddingRight2() {
  return (
    <div className="content-stretch flex items-start pl-[12px] pt-[12px] relative shrink-0" data-name="Padding right">
      <Ignore7 />
    </div>
  );
}

function ListRow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px py-[12px] relative rounded-[8px]" data-name="List row">
      <PaddingLeft2 />
      <Content2 />
      <PaddingRight2 />
    </div>
  );
}

function Selector2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 3">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <ListRow2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Selector />
      </div>
      <Small8Px />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Selector1 />
      </div>
      <Small8Px1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Selector2 />
      </div>
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

function AdelantosRecurrenteSeletorDias() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Adelantos/Recurrente/Seletor/Dias">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Lun</p>
      </div>
    </div>
  );
}

function Selector3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 1">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <AdelantosRecurrenteSeletorDias />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AdelantosRecurrenteSeletorDias1() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Adelantos/Recurrente/Seletor/Dias">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Mar</p>
      </div>
    </div>
  );
}

function Selector4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 2">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <AdelantosRecurrenteSeletorDias1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#434ce4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_2px_#dee9ff]" />
    </div>
  );
}

function AdelantosRecurrenteSeletorDias2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Adelantos/Recurrente/Seletor/Dias">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Mié</p>
      </div>
    </div>
  );
}

function Selector5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 8">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <AdelantosRecurrenteSeletorDias2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AdelantosRecurrenteSeletorDias3() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Adelantos/Recurrente/Seletor/Dias">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Jue</p>
      </div>
    </div>
  );
}

function Selector6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 9">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <AdelantosRecurrenteSeletorDias3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AdelantosRecurrenteSeletorDias4() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Adelantos/Recurrente/Seletor/Dias">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Vie</p>
      </div>
    </div>
  );
}

function Selector7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 10">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <AdelantosRecurrenteSeletorDias4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AdelantosRecurrenteSeletorDias5() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Adelantos/Recurrente/Seletor/Dias">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Sáb</p>
      </div>
    </div>
  );
}

function Selector8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 11">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <AdelantosRecurrenteSeletorDias5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AdelantosRecurrenteSeletorDias6() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Adelantos/Recurrente/Seletor/Dias">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[12px] text-black text-center" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Dom</p>
      </div>
    </div>
  );
}

function Selector9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[32px] relative rounded-[12px]" data-name="Selector 12">
      <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <AdelantosRecurrenteSeletorDias6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8788ab] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Selector3 />
      <Selector4 />
      <Selector5 />
      <Selector6 />
      <Selector7 />
      <Selector8 />
      <Selector9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "\'case\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Selecciona el día</p>
      </div>
      <Container1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full">
      <BoxSelector />
      <Frame />
    </div>
  );
}