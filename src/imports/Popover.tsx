import svgPaths from "./svg-c59kdk2333";

function Tip() {
  return <div className="bg-white rounded-tr-[2px] size-[12px]" data-name="Tip" />;
}

function Tip1() {
  return (
    <div className="content-stretch flex h-full items-end justify-center relative" data-name="Tip">
      <div className="flex items-center justify-center relative shrink-0 size-[16.971px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[135deg]">
          <Tip />
        </div>
      </div>
    </div>
  );
}

function Tip2() {
  return (
    <div className="h-[8px] relative shrink-0 w-full" data-name="Tip">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[24px] py-0 relative size-full">
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
            <div className="flex-none h-full rotate-[180deg]">
              <Tip1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Texts() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Texts">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#282834] text-[14px] w-full" style={{ fontFeatureSettings: "'case'" }}>
        Algunas veces no podrás adelantar todo el dinero que está por liberarse.
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Heading">
      <Texts />
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
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#434ce4] text-[14px]" style={{ fontFeatureSettings: "'case'" }}>
        <p className="css-ew64yg leading-[18px]">Conocer más</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Action">
      <Textlink />
    </div>
  );
}

function Surface() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-full" data-name="Surface">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Heading />
        <Action />
      </div>
    </div>
  );
}

export default function Popover() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_0px_12px_0px_rgba(40,40,52,0.1)] size-full" data-name="Popover">
      <Tip2 />
      <Surface />
    </div>
  );
}