import { MdPostAdd } from 'react-icons/md';
import { PinterestEmbed } from 'react-social-media-embed';
import React from 'react';

const pinterestEmbed = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PinterestEmbed url={url} width={328} captioned />
    </div>
  );
};
export default {
  name: 'pinterest',
  type: 'object',
  title: 'Pinterest',
  icon: MdPostAdd,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Pinterest Post URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: pinterestEmbed,
  },
};
