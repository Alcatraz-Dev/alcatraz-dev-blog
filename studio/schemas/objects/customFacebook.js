import { MdPostAdd } from 'react-icons/md';
import { FacebookEmbed } from 'react-social-media-embed';
import React from 'react';

const facebookEmbed = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FacebookEmbed url={url} width={328} captioned />
    </div>
  );
};
export default {
  name: 'facebook',
  type: 'object',
  title: 'Facebook',
  icon: MdPostAdd,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Facebook Post URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: facebookEmbed,
  },
};
