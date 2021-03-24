import React from 'react'

type StringToParagraphsF = (str: string) => [React.Component]
export const stringToParagraphs: StringToParagraphsF = (str) =>
  str.split('\n').map((s, i) => <p key={i}>{s}</p>)
