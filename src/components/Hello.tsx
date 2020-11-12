import React, { FunctionComponent } from 'react';

export interface HelloProps {
  name: string;
}

export const Hello: FunctionComponent<HelloProps> = ({ name }) => (
  <h1>{ name }</h1>
);
