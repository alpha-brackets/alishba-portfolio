import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const alt = 'Alishba Qadir';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
        }}
      >
        {/* The Exact Favicon Logo as a large, bold iconic badge */}
        <svg
          width="420"
          height="420"
          viewBox="0 0 64 64"
          style={{
            overflow: 'visible',
            filter: 'drop-shadow(0 25px 50px rgba(253, 91, 56, 0.35))',
          }}
        >
          <defs>
            <linearGradient id="coralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fd5b38" />
              <stop offset="100%" stopColor="#ff7a5c" />
            </linearGradient>
          </defs>
          {/* Sleek Dark Rounded Canvas */}
          <rect width="64" height="64" rx="16" fill="#121217" />
          <rect
            width="64"
            height="64"
            rx="16"
            fill="none"
            stroke="#fd5b38"
            strokeWidth="2"
          />

          {/* Creative Signature Monogram "AQ" */}
          <g
            fill="none"
            stroke="url(#coralGrad)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Fluid Stylized "A" */}
            <path d="M18 45 C19 32, 23 18, 30 18 C35 18, 38 23, 38 31 C38 41, 33 46, 26 46 C20 46, 17 41, 18 35 C19 28, 25 24, 34 24" />
            {/* Flourish loop connecting into "Q" */}
            <path d="M36 32 C41 24, 49 24, 51 31 C53 39, 46 45, 38 45" />
            <path d="M44 42 L52 50" strokeWidth="4.2" stroke="#ffffff" />
          </g>

          {/* Ambient Accent Dot */}
          <circle cx="50" cy="19" r="3" fill="#34d399" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
