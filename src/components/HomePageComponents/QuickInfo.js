import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <SectionButton>about</SectionButton>
      </Section>
    )
  }
}
