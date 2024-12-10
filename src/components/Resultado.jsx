import React from 'react';

export default function Resultado({ resultado }) {
  return (
    <div>
      {resultado && (
        <span style={{ color: resultado === 'Aprovado' ? 'green' : 'red' }}>{resultado}</span>
      )}
    </div>
  );
}