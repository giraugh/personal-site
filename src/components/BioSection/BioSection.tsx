import React from 'react'

import { bio } from '../../config/strings'
import { Container } from './bioSectionStyle'
import { stringToParagraphs } from '../../util/stringToParagraphs'

const BioSection: React.FC = () => <Container>{stringToParagraphs(bio)}</Container>

export default BioSection
