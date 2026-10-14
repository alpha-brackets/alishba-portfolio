import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/siteConfig';

export const runtime = 'nodejs';

export const alt = 'Alishba Qadir — Digital Marketer & Brand Strategist';
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0c0c0f',
          padding: '40px 60px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient Top Glow Accent */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '350px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(253, 91, 56, 0.28)',
            filter: 'blur(80px)',
          }}
        />

        {/* Clean Center Card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
            maxWidth: '1050px',
          }}
        >
          {/* Brand Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1.5px solid rgba(255, 255, 255, 0.18)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                backgroundColor: '#fd5b38',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '16px',
              }}
            >
              AQ
            </div>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '1px',
              }}
            >
              ALISHBA QADIR
            </span>
            <span
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#fd5b38',
                paddingLeft: '6px',
                borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              GROWTH STRATEGIST
            </span>
          </div>

          {/* Huge Main Headline - Perfectly centered, maximum bold contrast */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: 1.05,
            }}
          >
            <span
              style={{
                fontSize: '84px',
                fontWeight: 900,
                letterSpacing: '-2px',
                color: '#ffffff',
              }}
            >
              Marketing Starts
            </span>
            <span
              style={{
                fontSize: '84px',
                fontWeight: 900,
                letterSpacing: '-2px',
                color: '#fd5b38',
              }}
            >
              Before The Marketing.
            </span>
          </div>

          {/* Clean legible Subheadline */}
          <p
            style={{
              fontSize: '26px',
              fontWeight: 400,
              color: '#d4d4d8',
              maxWidth: '880px',
              lineHeight: 1.35,
              margin: '0',
            }}
          >
            Audience Psychology • Market Whitespace • Lead Pipelines
          </p>

          {/* Bottom Authority Tags */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '12px',
            }}
          >
            <div
              style={{
                padding: '8px 22px',
                borderRadius: '9999px',
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '16px',
                fontWeight: 800,
              }}
            >
              alishbaqadir.com
            </div>
            <div
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#a1a1aa',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              Brand Launches &amp; Growth Strategy
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
