import { IHelmet } from 'interface';
import React from 'react';
import { Helmet } from 'react-helmet';
// import { IHelmet } from '../../../../interface';



export default function SEO({ title, name, content }: IHelmet) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
}
