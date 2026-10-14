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
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(253, 91, 56, 0.22) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(255, 122, 92, 0.12) 0%, transparent 50%)',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Top Header: Monogram Logo & Live Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: '#121216',
                border: '1.5px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fd5b38',
                fontSize: '24px',
                fontWeight: 900,
                letterSpacing: '-1px',
              }}
            >
              AQ
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>
                {siteConfig.name}
              </span>
              <span style={{ fontSize: '14px', color: '#a1a1aa', letterSpacing: '0.5px' }}>
                {siteConfig.title}
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: '#34d399',
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#34d399',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Accepting Projects
            </span>
          </div>
        </div>

        {/* Main Center Headline: Strategic & Impactful */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '1000px',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: '58px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Marketing starts <br />
            <span
              style={{
                color: '#fd5b38',
                backgroundImage: 'linear-gradient(90deg, #fd5b38, #ff8c42)',
                backgroundClip: 'text',
              }}
            >
              before the marketing.
            </span>
          </h1>

          <p
            style={{
              fontSize: '22px',
              fontWeight: 300,
              lineHeight: 1.45,
              color: '#d4d4d8',
              margin: 0,
              maxWidth: '880px',
            }}
          >
            Audience psychology, competitive whitespace, and high-retention content systems that turn market attention into qualified leads.
          </p>
        </div>

        {/* Bottom Footer: Authority Pills & Domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span
              style={{
                fontSize: '13px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#a1a1aa',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              Brand Positioning
            </span>
            <span
              style={{
                fontSize: '13px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#a1a1aa',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              Content Architecture
            </span>
            <span
              style={{
                fontSize: '13px',
                padding: '6px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#a1a1aa',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              UI/UX &amp; Design Psychology
            </span>
          </div>

          <span
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#fd5b38',
              letterSpacing: '0.5px',
            }}
          >
            alishbaqadir.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
