import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Notre histoire</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolores iste consequuntur pariatur, est earum voluptatum ex necessitatibus sed ratione dolor dignissimos adipisci repellendus. Fuga quidem, quia soluta quis, natus doloribus at, perferendis dolorem facilis pariatur ullam. Quibusdam labore, ab, pariatur minus porro voluptates eos vitae expedita accusamus qui cumque.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
