import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0A0F1C',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid #1DBCD640',
        }}
      >
        <span
          style={{
            fontFamily: 'serif',
            fontSize: 22,
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#1DBCD6',
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          i
        </span>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
