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
        {/* Large, high-impact brand tile optimized for tiny chat thumbnails */}
        <div
          style={{
            width: '440px',
            height: '440px',
            borderRadius: '96px',
            backgroundColor: '#111116',
            border: '8px solid #fd5b38',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 30px 80px rgba(253, 91, 56, 0.45)',
          }}
        >
          {/* Subtle Emerald Active Dot at the top right corner */}
          <div
            style={{
              position: 'absolute',
              top: '44px',
              right: '44px',
              width: '24px',
              height: '24px',
              borderRadius: '12px',
              backgroundColor: '#34d399',
              boxShadow: '0 0 20px rgba(52, 211, 153, 0.8)',
            }}
          />

          {/* Super bold AQ text perfectly centered and occupying maximum space */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontSize: '220px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-10px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              A
            </span>
            <span
              style={{
                fontSize: '220px',
                fontWeight: 900,
                color: '#fd5b38',
                letterSpacing: '-10px',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                marginLeft: '-4px',
              }}
            >
              Q
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
