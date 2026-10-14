import { ImageResponse } from 'next/og';

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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          position: 'relative',
        }}
      >
        {/* Ambient Warm Glow */}
        <div
          style={{
            position: 'absolute',
            width: '450px',
            height: '450px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(253, 91, 56, 0.25)',
            filter: 'blur(70px)',
          }}
        />

        {/* Square-Safe 550x550 Center Stage (Guaranteed 100% visible in WhatsApp 1:1 crop) */}
        <div
          style={{
            width: '550px',
            height: '550px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '18px',
            padding: '24px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Distinctive Logo Monogram */}
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '26px',
              backgroundColor: '#121216',
              border: '2.5px solid #fd5b38',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 12px 35px rgba(253, 91, 56, 0.35)',
            }}
          >
            <span
              style={{
                fontSize: '44px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-1px',
              }}
            >
              AQ
            </span>
          </div>

          {/* Name & Primary Role */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              style={{
                fontSize: '46px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
              }}
            >
              Alishba Qadir
            </span>
            <span
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#fd5b38',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Growth Strategist
            </span>
          </div>

          {/* Punchy 1-Liner: Short, Bold, Clear */}
          <p
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: '#d4d4d8',
              lineHeight: 1.3,
              margin: '4px 0 0 0',
              maxWidth: '480px',
            }}
          >
            Positioning • Brand Launches • Lead Pipelines
          </p>

          {/* Clean Domain Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1.5px solid rgba(255, 255, 255, 0.18)',
              marginTop: '6px',
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
                fontSize: '17px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.5px',
              }}
            >
              alishbaqadir.com
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
