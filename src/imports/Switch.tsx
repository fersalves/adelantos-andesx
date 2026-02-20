import svgPaths from "./svg-t88odl7bt8";

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
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[20px]" data-name="Handle">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <FeedbackPositive />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b5b9d4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Control() {
  return (
    <div className="bg-[#d0d4e6] h-[20px] relative rounded-[9999px] shrink-0 w-[35px]" data-name="Control">
      <div className="content-stretch flex items-center justify-end overflow-clip relative rounded-[inherit] size-full">
        <Handle />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b5b9d4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

export default function Switch() {
  return (
    <div className="content-stretch flex items-start py-[2px] relative size-full" data-name="Switch">
      <Control />
    </div>
  );
}