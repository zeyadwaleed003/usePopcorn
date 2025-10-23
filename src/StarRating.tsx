import { CSSProperties } from 'react';

// place it outside so react do not need to regenerate this every time the Rerendering happens
const containerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const startContainerStyle: CSSProperties = {
  display: 'flex',
  gap: '4px',
};

const textStyle: CSSProperties = {
  lineHeight: '1',
  margin: '0',
};

export default function ({ maxRating = 5 }: { maxRating?: number }) {
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
