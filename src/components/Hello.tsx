import React, { SFC } from 'react';

export interface HelloProps {
  name: string;
}

export const Hello: SFC<HelloProps> = ({ name }) => (
  <h1>{ name }</h1>
);
