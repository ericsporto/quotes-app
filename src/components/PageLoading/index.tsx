type Props = {
  isLoading: boolean;
};
export const PageLoading = (props: Props) => {
  if (!props.isLoading) return null;
  return (
    <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
      <div className="w-[75px] h-[75px] animate-spin">
        <svg className="w-full h-full" viewBox="0 0 50 50">
          <circle
            className="stroke-current"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="125, 200"
            strokeDashoffset="0"
            style={{
              stroke: 'url(#gradient)',
              transformOrigin: 'center',
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#687BEA" />
              <stop offset="100%" stopColor="#C4C4C400" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
