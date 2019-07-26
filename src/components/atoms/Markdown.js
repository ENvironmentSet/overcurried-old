import React from 'react';
import styled from '@emotion/styled';

import { hyperLinkColor, textColor, accentColor } from 'constants/palette';

export default function Markdown({ children }) {
  const MarkdownContainer = styled.div`
      a {
        color: ${hyperLinkColor};
      }
      strong {
        color: ${accentColor}
      }
      hr {
        background-color: ${textColor};
      }
  `;

  return (
    <MarkdownContainer dangerouslySetInnerHTML={{ __html: children }} />
  );
}