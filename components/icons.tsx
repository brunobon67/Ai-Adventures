
import React from 'react';

type IconProps = {
  className?: string;
};

export const PaperAirplaneIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const RocketLaunchIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.953 14.953 0 00-2.582-7.772M12 20.25a14.953 14.953 0 00-2.582-7.772M12 20.25v-4.82m0 0a14.923 14.923 0 01-3.183-2.571M12 15.43m0-4.82l-3.182-2.571m0 0a14.923 14.923 0 01-2.582-7.772M3.183 8.031a14.923 14.923 0 012.582-7.772m0 0a14.923 14.923 0 01-2.582 7.772M3.183 8.031l2.582 7.772m0 0a14.923 14.923 0 013.183-2.571m0 0l-2.582-7.772m0 0a14.953 14.953 0 00-2.582 7.772M12 20.25a14.953 14.953 0 002.582-7.772m0 0a14.953 14.953 0 003.183 2.571M14.57 12.63a14.953 14.953 0 002.582 7.772m0 0a14.953 14.953 0 002.582-7.772m0 0a14.953 14.953 0 00-2.582-7.772m-5.164 0a14.953 14.953 0 00-2.582 7.772M12 3.75a14.953 14.953 0 00-3.183 2.571m3.183-2.571a14.953 14.953 0 013.183 2.571m0 0a14.953 14.953 0 012.582 7.772M12 3.75a14.953 14.953 0 01-2.582 7.772m0 0a14.953 14.953 0 012.582 7.772" />
    </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
  </svg>
);

export const RunningIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.75A.75.75 0 0110 1zM5.05 3.95a.75.75 0 011.06 0l1.062 1.06a.75.75 0 01-1.06 1.06L5.05 5.01A.75.75 0 015.05 3.95zm10.957 1.06a.75.75 0 10-1.06-1.06L13.885 5.01a.75.75 0 001.06 1.06l1.06-1.06zM1.75 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 011.75 10zm14.5 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM8.073 8.073a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);

export const PriceTagIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.278-.659 2.003-.659.725 0 1.45.22 2.003.659l.879.659" />
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a14.994 14.994 0 01-7.5 0C3.373 20.311 2.25 17.5 2.25 14.25c0-4.602 3.203-8.59 7.5-9.662V3.75a1.5 1.5 0 013 0v.838c4.297 1.072 7.5 5.06 7.5 9.662 0 3.25-1.123 6.061-2.998 8.05z" />
    </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);

export const TransitIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h-2.25m15 0h2.25m-5.25-6H12m0 0v-5.25m0 5.25h5.25" />
    </svg>
);

export const FoodIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM4.032 4.28a.75.75 0 011.06-1.06l1.094 1.093a.75.75 0 11-1.06 1.06L4.032 4.28zm10.876 0l1.094-1.094a.75.75 0 111.06 1.06l-1.094 1.094a.75.75 0 11-1.06-1.06z" />
    <path fillRule="evenodd" d="M2 9a8 8 0 1116 0c0 2.28-.908 4.368-2.395 5.856l-1.04-1.04A6.5 6.5 0 0016.5 9c0-3.584-2.916-6.5-6.5-6.5S3.5 5.416 3.5 9a6.5 6.5 0 001.056 3.633l-1.23 1.23A8.026 8.026 0 012 9zm2 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

export const LandmarkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M1 6.5a.5.5 0 01.5-.5h2.5a.5.5 0 010 1H2v10.5a.5.5 0 01-1 0V6.5zM5 6.5a.5.5 0 01.5-.5h2.5a.5.5 0 010 1H6v10.5a.5.5 0 01-1 0V6.5zM9 6.5a.5.5 0 01.5-.5h2.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V6.5zM15.5 6a.5.5 0 00-.5.5v10.5a.5.5 0 001 0V6.5a.5.5 0 00-.5-.5z" clipRule="evenodd" />
        <path d="M17 2.5a.5.5 0 000-1H3a.5.5 0 000 1h14zM18.5 4a.5.5 0 01.5.5v13a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM2 18.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5z" />
    </svg>
);

export const LeafIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M15.404 4.596a.75.75 0 01-.153 1.052l-5.385 4.308a.75.75 0 00-.38 1.014l1.458 3.645a.75.75 0 01-1.25.5l-1.458-3.645a2.25 2.25 0 011.14-3.042l5.385-4.308a.75.75 0 011.203-.154z" />
        <path d="M12.03 8.12a.75.75 0 01-1.203.154l-5.385-4.308a.75.75 0 01.153-1.052l5.385 4.308a2.25 2.25 0 01-1.14 3.042l-1.458 3.645a.75.75 0 11-1.25-.5l1.458-3.645a.75.75 0 00.38-1.014L3.13 6.958a.75.75 0 011.203-.154L12.03 8.12z" />
    </svg>
);

export const ShoppingBagIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4z" clipRule="evenodd" />
    </svg>
);

export const UnknownIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M6.5 9a.5.5 0 01.5-.5h6a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 1116 0A8 8 0 012 10z" clipRule="evenodd" />
    </svg>
);

export const HistoryIcon: React.FC<IconProps> = LandmarkIcon;
export const ArtIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M1 1.75A.75.75 0 011.75 1h16.5a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V1.75zM2.5 2.5v15h15V2.5h-15z" />
        <path d="M5.023 7.923a.75.75 0 011.06 0l1.25 1.25a.75.75 0 01-1.06 1.06l-1.25-1.25a.75.75 0 010-1.06zM6.25 12a.75.75 0 00-1.06 1.06l.22.22H11.5a.75.75 0 000-1.5H5.41l.84-.84a.75.75 0 10-1.06-1.06l-1.75 1.75a.75.75 0 000 1.06l1.75 1.75a.75.75 0 101.06-1.06L5.41 13.5H11.5a2.25 2.25 0 012.25 2.25v.25a.75.75 0 001.5 0v-.25A3.75 3.75 0 0011.5 12h-5.25z" />
    </svg>
);
export const NightlifeIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10 3.75a.75.75 0 01.75.75v3.44l3.03 3.03a.75.75 0 01-1.06 1.06l-2.72-2.72V15a.75.75 0 01-1.5 0V9.25l-2.72 2.72a.75.75 0 01-1.06-1.06l3.03-3.03V4.5a.75.75 0 01.75-.75z" />
        <path d="M5.25 2.5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z" />
    </svg>
);
export const RelaxationIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M5.5 4.5a3.5 3.5 0 016.794 1.576 4.5 4.5 0 015.412 5.163 3.5 3.5 0 01-6.794-1.576 4.5 4.5 0 01-5.412-5.163zM10.153 1.153a.75.75 0 01-.48 1.341A5.922 5.922 0 006.33 8.41a.75.75 0 01-1.28.749 7.422 7.422 0 014.195-7.854.75.75 0 01.908-.152z" />
        <path d="M14.5 15.5a3.5 3.5 0 01-6.794-1.576 4.5 4.5 0 01-5.412-5.163 3.5 3.5 0 016.794 1.576 4.5 4.5 0 015.412 5.163zM9.847 18.847a.75.75 0 01.48-1.341 5.922 5.922 0 003.343-5.916.75.75 0 111.28-.749 7.422 7.422 0 01-4.195 7.854.75.75 0 01-.908.152z" />
    </svg>
);
export const ArchitectureIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9.25 3.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V4a.75.75 0 01.75-.75z" clipRule="evenodd" />
        <path d="M3.23 8.23a.75.75 0 011.06 0l5.25 5.25a.75.75 0 01-1.06 1.06L3.23 9.29a.75.75 0 010-1.06z" />
        <path d="M15.77 8.23a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06l5.25-5.25a.75.75 0 011.06 0z" />
    </svg>
);
export const FamilyIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M8.889 12.03a.75.75 0 01.332-1.425 2.991 2.991 0 002.557 0 .75.75 0 11.332 1.425 4.49 4.49 0 01-3.221 0z" />
        <path fillRule="evenodd" d="M12.5 11.25a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75zM11 12.5a.75.75 0 00-1.5 0v.01a.75.75 0 001.5 0v-.01zM10 10.25a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75zM8.5 11.25a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75zM7.5 10a.75.75 0 00-1.5 0v.01a.75.75 0 001.5 0V10zM5.5 11.25a.75.75 0 01.75-.75h.01a.75.75 0 010 1.5h-.01a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M9.91 4.512a.75.75 0 01.837.24l.245.378a.75.75 0 01-.96.345l-.29-.129a3 3 0 00-2.628 0l-.29.129a.75.75 0 11-.615-1.285l.245-.378a2.25 2.25 0 012.21-1.107z" clipRule="evenodd" />
        <path d="M12.94 1.833a2.25 2.25 0 013.344 2.112l-.245.378a.75.75 0 11-1.285-.615l.29-.129a.75.75 0 00-.657 0l-.29.129a.75.75 0 01-.96-.345l.245-.378a.75.75 0 01.558-.553z" />
        <path d="M7.06 1.833A2.25 2.25 0 003.716 3.945l.245.378a.75.75 0 101.285-.615l-.29-.129a.75.75 0 01.657 0l.29.129a.75.75 0 00.96-.345L7.62 2.386a.75.75 0 00-.558-.553z" />
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
    </svg>
);
export const TechIcon: React.FC<IconProps> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M11.25 2.25a.75.75 0 00-1.5 0v1.51a4.52 4.52 0 00-1.874.526l-1.06-1.06a.75.75 0 00-1.06 1.06l1.06 1.06a4.52 4.52 0 00-.527 1.874H4.75a.75.75 0 000 1.5h1.51a4.52 4.52 0 00.526 1.874l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06a4.52 4.52 0 001.874.527v1.51a.75.75 0 001.5 0v-1.51a4.52 4.52 0 001.874-.526l1.06 1.06a.75.75 0 001.06-1.06l-1.06-1.06a4.52 4.52 0 00.527-1.874h1.51a.75.75 0 000-1.5h-1.51a4.52 4.52 0 00-.526-1.874l1.06-1.06a.75.75 0 00-1.06-1.06l-1.06 1.06a4.52 4.52 0 00-1.874-.527V2.25zM10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
    </svg>
);

export const HashtagIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h13.5m-13.5 7.5h13.5m-1.5-15l-3 15m-2.25-15l-3 15" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

export const CoffeeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 3a.75.75 0 01.75.75V5h-1.5V3.75A.75.75 0 0110 3zM8.5 6.5V5h3V6.5A2.5 2.5 0 019 9H8.5V6.5zM11.5 5H13a.5.5 0 01.5.5v1A2.5 2.5 0 0111 9h-.5V6.5a1 1 0 011-1.5z" />
    <path fillRule="evenodd" d="M3 8.25A2.75 2.75 0 015.75 5.5h8.5A2.75 2.75 0 0117 8.25v2.27a4.75 4.75 0 01-1.551 3.545 3.25 3.25 0 01-2.9 1.185H6.701a3.25 3.25 0 01-2.9-1.185A4.75 4.75 0 012 10.52V8.25zm.75 2.27a3.25 3.25 0 001.051 2.454 1.75 1.75 0 001.549.646h6.3a1.75 1.75 0 001.55-.646A3.25 3.25 0 0015.25 10.52V8.25a1.25 1.25 0 00-1.25-1.25h-8.5A1.25 1.25 0 004 8.25v2.27z" clipRule="evenodd" />
  </svg>
);
export const WalkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v2.25c0 .414-.168.79-.44 1.06l-1.359 1.36a1 1 0 01-1.414-1.414l.87-.87a.25.25 0 00-.176-.424H9.5a1 1 0 01-1-1V4a1 1 0 011-1h.5z" clipRule="evenodd" />
    <path d="M10 8.25a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM4.743 9.043a.75.75 0 10-1.06-1.06l-1.933 1.932a.75.75 0 000 1.06l1.22 1.22a.75.75 0 101.06-1.06l-.69-.691 1.082-1.082-.74-1.26z" />
    <path d="M16.28 9.97a.75.75 0 01-1.06 0l-.74-1.261 1.082-1.082-.69.69a.75.75 0 01-1.06-1.06l1.22-1.22a.75.75 0 010 1.06l-1.932 1.933a.75.75 0 01-1.06 0z" />
  </svg>
);
export const FireIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M15.312 5.232a.75.75 0 01.936.465l1.5 4.5a.75.75 0 01-1.476.492l-1.12-3.36-2.228 1.485a.75.75 0 01-.612 0l-2.5-1.667a.75.75 0 01-.06-1.118l3.75-5a.75.75 0 011.118-.06l-.28.42z" clipRule="evenodd" />
    <path d="M2.5 9.333a4.5 4.5 0 118.518 2.443A3.75 3.75 0 016.25 15.5h-1.5a.75.75 0 010-1.5h1.5a2.25 2.25 0 10-2.14-3.23l.004-.002a.75.75 0 01.996-1.127 3 3 0 00-3.116-2.308z" />
  </svg>
);
export const PiggyBankIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M2.5 6A2.5 2.5 0 015 3.5h3.14a.75.75 0 01.62.37l1.09 1.816a.75.75 0 00.62.37h2.04a.75.75 0 010 1.5H11.5a.75.75 0 00-.62.37L9.79 9.14a.75.75 0 01-1.24 0l-.36-1.182a.75.75 0 00-.7-.458H5.625a.75.75 0 010-1.5h1.25a.75.75 0 00.7-.458L8.14 4.36a.75.75 0 01.62-.37H5A1 1 0 004 5v1z" />
    <path d="M4 11.25A2.75 2.75 0 006.75 8.5h6.5A2.75 2.75 0 0116 11.25v2.27a4.75 4.75 0 01-1.551 3.545A3.25 3.25 0 0111.75 18.25h-3.5A3.25 3.25 0 015.05 17.065 4.75 4.75 0 013 13.52v-2.27z" />
  </svg>
);
export const WalletIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M2.5 4.5A2.5 2.5 0 015 2h10a2.5 2.5 0 012.5 2.5v2.5a.75.75 0 01-1.5 0v-2.5a1 1 0 00-1-1H5a1 1 0 00-1 1v11a1 1 0 001 1h10a1 1 0 001-1v-2a.75.75 0 011.5 0v2A2.5 2.5 0 0115 18H5A2.5 2.5 0 012.5 15.5v-11z" />
    <path d="M14.75 8.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zM9.5 8a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
  </svg>
);
export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 2.5a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0V3.25a.75.75 0 01.75-.75zM7.5 5.66a.75.75 0 00-1.06 1.06l-.886.885a.75.75 0 001.06 1.061l.886-.885a.75.75 0 000-1.061zM13.621 6.72a.75.75 0 011.06 0l.885.885a.75.75 0 01-1.06 1.06l-.885-.885a.75.75 0 010-1.06zM17.25 10a.75.75 0 01-.75.75h-1.25a.75.75 0 010-1.5h1.25a.75.75 0 01.75.75zM14.434 14.384a.75.75 0 001.06-1.06l-.885-.885a.75.75 0 10-1.06 1.06l.885.885zM6.384 12.566a.75.75 0 010 1.06l-.885.885a.75.75 0 01-1.06-1.06l.885-.885a.75.75 0 011.06 0zM10 16.75a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0v-1.25a.75.75 0 01.75-.75zM3.566 7.616a.75.75 0 00-1.06-1.06l-.885.885a.75.75 0 001.06 1.06l.885-.885z" clipRule="evenodd" />
  </svg>
);

export const ClipboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
);

export const PrinterIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6 18.233m0-4.404a42.258 42.258 0 0010.56 0m0 0L18 18.233m-12-4.404s.678-1.681 2.648-3.206c1.97-.152 4.062-1.681 4.062-1.681s2.092 1.529 4.062 1.681c1.97 1.525 2.648 3.206 2.648 3.206M12 11.814a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const WandIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.25M9.75 3.104c.238.19.478.41.706.654a2.25 2.25 0 003.088 0c.228-.244.468-.464.706-.654M9.75 3.104a2.25 2.25 0 00-3.088 0c-.228.244-.468.464-.706.654m6.176 9.152a2.25 2.25 0 01.659 1.591v5.714m0 0a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-5.714m0 0a2.25 2.25 0 01.659-1.591L9.75 8.25M15.75 12.75a2.25 2.25 0 00-3.088 0c-.228.244-.468.464-.706.654" />
    </svg>
);