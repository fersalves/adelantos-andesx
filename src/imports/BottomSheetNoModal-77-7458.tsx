import svgPaths from "./svg-ywjeqa8kfw";

function AreaTapeable() {
  return (
    <div className="content-stretch flex flex-col items-start px-[4px] py-[8px] relative shrink-0" data-name="Area tapeable">
      <div className="bg-[#646587] h-[4px] rounded-[9999px] shrink-0 w-[32px]" data-name="Drag indicator" />
    </div>
  );
}

function DragIndicator() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Drag indicator">
      <AreaTapeable />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#282834] text-[18px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-4hzbpn leading-[22px]">Selecciona el día o periodo que quieres adelantar</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[8px] py-[8px] relative w-full">
        <Title />
      </div>
    </div>
  );
}

function Ignore() {
  return <div className="shrink-0 size-0" data-name="Ignore" />;
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Close">
          <path d={svgPaths.p3ead2f80} fill="var(--fill-0, #646587)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DismissButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Dismiss button">
      <Close />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Action">
      <DismissButton />
    </div>
  );
}

function Dismiss() {
  return (
    <div className="content-stretch flex items-start justify-end pb-[8px] pl-[4px] pt-[4px] relative self-stretch shrink-0" data-name="Dismiss">
      <Action />
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Controls">
      <Content />
      <Ignore />
      <Dismiss />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative w-full">
          <Controls />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-[360px]" data-name="Header">
      <DragIndicator />
      <Header />
    </div>
  );
}

function Mes() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mes">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[12px] pt-[20px] px-[12px] relative w-full">
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#646587] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            Abril
          </p>
        </div>
      </div>
    </div>
  );
}

function Day() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        LUN
      </p>
    </div>
  );
}

function Day1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MAR
      </p>
    </div>
  );
}

function Day2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MIÉ
      </p>
    </div>
  );
}

function Day3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        JUE
      </p>
    </div>
  );
}

function Day4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        VIE
      </p>
    </div>
  );
}

function Day5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        SÁB
      </p>
    </div>
  );
}

function Day6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        DOM
      </p>
    </div>
  );
}

function DiaSemana() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Dia semana">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
    </div>
  );
}

function InfoMes() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[336px]" data-name="Info mes">
      <Mes />
      <DiaSemana />
    </div>
  );
}

function Day7() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
    </div>
  );
}

function Day8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        2
      </p>
    </div>
  );
}

function Day9() {
  return (
    <div className="bg-[#434ce4] content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 size-[48px] text-center text-white" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        3
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day10() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        4
      </p>
    </div>
  );
}

function Day11() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        5
      </p>
    </div>
  );
}

function Day12() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        6
      </p>
    </div>
  );
}

function Semana() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day7 />
      <Day8 />
      <Day9 />
      <Day10 />
      <Day11 />
      <Day12 />
    </div>
  );
}

function Day13() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        7
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day14() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        8
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day15() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        9
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day16() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        10
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day17() {
  return (
    <div className="bg-[#dee9ff] content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        11
      </p>
    </div>
  );
}

function Day18() {
  return (
    <div className="bg-[#434ce4] content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 size-[48px] text-center text-white" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        12
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day19() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        13
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Semana1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day13 />
      <Day14 />
      <Day15 />
      <Day16 />
      <Day17 />
      <Day18 />
      <Day19 />
    </div>
  );
}

function Day20() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        14
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day21() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        15
      </p>
    </div>
  );
}

function Day22() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        16
      </p>
    </div>
  );
}

function Day23() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        17
      </p>
    </div>
  );
}

function Day24() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        18
      </p>
    </div>
  );
}

function Day25() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        19
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day26() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        20
      </p>
    </div>
  );
}

function Semana2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day20 />
      <Day21 />
      <Day22 />
      <Day23 />
      <Day24 />
      <Day25 />
      <Day26 />
    </div>
  );
}

function Day27() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
    </div>
  );
}

function Day28() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Semana3() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day27 />
      <Day27 />
      <Day27 />
      {[...Array(3).keys()].map((_, i) => (
        <Day28 key={i} />
      ))}
      <Day27 />
    </div>
  );
}

function Day29() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        28
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day30() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        29
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day31() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        30
      </p>
    </div>
  );
}

function Semana4() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Semana">
      <Day29 />
      <Day30 />
      <Day31 />
    </div>
  );
}

function Mes1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[336px]" data-name="Mes">
      <InfoMes />
      <Semana />
      <Semana1 />
      <Semana2 />
      <Semana3 />
      <Semana4 />
    </div>
  );
}

function Mes2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mes">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[12px] pt-[20px] px-[12px] relative w-full">
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#646587] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
            Mayo
          </p>
        </div>
      </div>
    </div>
  );
}

function Day32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        LUN
      </p>
    </div>
  );
}

function Day33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MAR
      </p>
    </div>
  );
}

function Day34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        MIÉ
      </p>
    </div>
  );
}

function Day35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        JUE
      </p>
    </div>
  );
}

function Day36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        VIE
      </p>
    </div>
  );
}

function Day37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        SÁB
      </p>
    </div>
  );
}

function Day38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[4px] relative" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#646587] text-[10px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        DOM
      </p>
    </div>
  );
}

function DiaSemana1() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Dia semana">
      <Day32 />
      <Day33 />
      <Day34 />
      <Day35 />
      <Day36 />
      <Day37 />
      <Day38 />
    </div>
  );
}

function InfoMes1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[336px]" data-name="Info mes">
      <Mes2 />
      <DiaSemana1 />
    </div>
  );
}

function Day39() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        1
      </p>
    </div>
  );
}

function Day40() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        2
      </p>
    </div>
  );
}

function Day41() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        3
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day42() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        4
      </p>
    </div>
  );
}

function Semana5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Semana">
      <Day39 />
      <Day40 />
      <Day41 />
      <Day42 />
    </div>
  );
}

function Day43() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        5
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day44() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        6
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day45() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        7
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day46() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        8
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day47() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        9
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day48() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        10
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day49() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        11
      </p>
    </div>
  );
}

function Semana6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day43 />
      <Day44 />
      <Day45 />
      <Day46 />
      <Day47 />
      <Day48 />
      <Day49 />
    </div>
  );
}

function Day50() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        12
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day51() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        13
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day52() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        14
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day53() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        15
      </p>
    </div>
  );
}

function Day54() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        16
      </p>
    </div>
  );
}

function Day55() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        17
      </p>
    </div>
  );
}

function Day56() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        18
      </p>
    </div>
  );
}

function Semana7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day50 />
      <Day51 />
      <Day52 />
      <Day53 />
      <Day54 />
      <Day55 />
      <Day56 />
    </div>
  );
}

function Day57() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] items-start justify-between not-italic py-[8px] relative shrink-0 size-[48px] text-center" data-name="day">
      <p className="css-4hzbpn leading-[16px] relative shrink-0 text-[#282834] text-[12px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        19
      </p>
      <p className="css-4hzbpn leading-[12px] relative shrink-0 text-[#646587] text-[10px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        $ 999 k
      </p>
    </div>
  );
}

function Day58() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        20
      </p>
    </div>
  );
}

function Day59() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        21
      </p>
    </div>
  );
}

function Day60() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        22
      </p>
    </div>
  );
}

function Day61() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        23
      </p>
    </div>
  );
}

function Day62() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        24
      </p>
    </div>
  );
}

function Day63() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        25
      </p>
    </div>
  );
}

function Semana8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day57 />
      <Day58 />
      <Day59 />
      <Day60 />
      <Day61 />
      <Day62 />
      <Day63 />
    </div>
  );
}

function Day64() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        26
      </p>
    </div>
  );
}

function Day65() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        27
      </p>
    </div>
  );
}

function Day66() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        28
      </p>
    </div>
  );
}

function Day67() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        29
      </p>
    </div>
  );
}

function Day68() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        30
      </p>
    </div>
  );
}

function Day69() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 size-[48px]" data-name="day">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9ebf] text-[12px] text-center w-full" style={{ fontFeatureSettings: "'case'" }}>
        31
      </p>
    </div>
  );
}

function Semana9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Semana">
      <Day64 />
      <Day65 />
      <Day66 />
      <Day67 />
      <Day68 />
      <Day69 />
    </div>
  );
}

function Mes3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[336px]" data-name="Mes">
      <InfoMes1 />
      <Semana5 />
      <Semana6 />
      <Semana7 />
      <Semana8 />
      <Semana9 />
    </div>
  );
}

function Component2Meses() {
  return (
    <div className="content-stretch flex flex-col h-[458px] items-center overflow-x-clip overflow-y-auto pt-[16px] relative shrink-0 w-[360px]" data-name="2 meses">
      <Mes1 />
      <Mes3 />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">1.000</p>
      </div>
    </div>
  );
}

function MoneyConfig() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
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

function Adelantas() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Adelantas">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Adelantas</p>
      </div>
      <MoneyAmount />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Info">
          <g id="Vector">
            <path d={svgPaths.p15320700} fill="var(--fill-0, #434CE4)" />
            <path d={svgPaths.p35066680} fill="var(--fill-0, #434CE4)" />
            <path clipRule="evenodd" d={svgPaths.p3b9a5f80} fill="var(--fill-0, #434CE4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CostoDiscount() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-name="Costo discount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Costo</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">3,24%</p>
      </div>
      <Info />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">1.000</p>
      </div>
    </div>
  );
}

function MoneyConfig1() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline justify-center relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">-</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount1 />
    </div>
  );
}

function MoneyAmount1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig1 />
    </div>
  );
}

function Costo() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="flex flex-row items-end self-stretch">
        <CostoDiscount />
      </div>
      <MoneyAmount1 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">1.000</p>
      </div>
    </div>
  );
}

function MoneyConfig2() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="Money config.">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">$</p>
      </div>
      <Amount2 />
    </div>
  );
}

function MoneyAmount2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Money amount">
      <MoneyConfig2 />
    </div>
  );
}

function Costo1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Costo">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282834] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Recibes</p>
      </div>
      <MoneyAmount2 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Body">
      <Adelantas />
      <Costo />
      <Costo1 />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon & Label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Seleccionar</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#434ce4] h-[40px] max-h-[40px] min-h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[2px] relative size-full">
          <IconLabel />
        </div>
      </div>
    </div>
  );
}

function Cuenta() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[20px] relative shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] shrink-0 w-[360px]" data-name="cuenta">
      <Body />
      <Button />
    </div>
  );
}

export default function BottomSheetNoModal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_-2px_4px_0px_rgba(40,40,52,0.1)] size-full" data-name="Bottom sheet no modal">
      <Header1 />
      <Component2Meses />
      <Cuenta />
    </div>
  );
}