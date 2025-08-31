import React from 'react';
import aarogyamContent from '../blogs/aarogyamContent'; // your content file

function AarogyamComponent() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: aarogyamContent }}
    />
  );
}

export default AarogyamComponent;
