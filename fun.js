import React from 'react'
import { SectionLayout } from '../shared'

import sponsors from '../../config/content/SponsorItems'
import {
  TickerContainer,
  TickerMover,
  ItemContainer,
  TickerIcon,
} from '../../styles/sponsors.style'
import SectionHeading from '../shared/SectionHeading'

function TickerItem({ source, alt, size }) {
  return (
    source && (
      <ItemContainer>
        <TickerIcon src={source} alt={alt} style={{ width: size }} />
      </ItemContainer>
    )
  )
}
function Ticker() {
  return (
    <SectionLayout id="Sponsors">
      <SectionHeading title={sponsors.title} width={285} />
      <TickerContainer>
        <TickerMover>
          {[...sponsors.alpha, ...sponsors.beta].map(({ name, src, width }) => (
            <TickerItem key={name} source={src} alt={name} size={width} />
          ))}

          <div style={{ margin: '0 20vw', display: 'inline-block' }} />

          {[...sponsors.alpha, ...sponsors.beta].map(({ name, src, width }) => (
            <TickerItem key={name} source={src} alt={name} size={width} />
          ))}

          <div style={{ margin: '0 10vw', display: 'inline-block' }} />

          {[...sponsors.alpha, ...sponsors.beta].map(({ name, src, width }) => (
            <TickerItem key={name} source={src} alt={name} size={width} />
          ))}
        </TickerMover>
      </TickerContainer>
    </SectionLayout>
  )
}

export default Ticker