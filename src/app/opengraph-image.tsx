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
        {/* Giant Monogram Tile that fills the square perfectly */}
        <div
          style={{
            width: '420px',
            height: '420px',
            borderRadius: '90px',
            backgroundColor: '#121217',
            border: '6px solid #fd5b38',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 60px rgba(253, 91, 56, 0.4)',
          }}
        >
          <span
            style={{
              fontSize: '180px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-6px',
              lineHeight: 1,
              marginTop: '-10px',
            }}
          >
            AQ
          </span>

          <span
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: '#fd5b38',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginTop: '10px',
            }}
          >
            ALISHBA QADIR
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
