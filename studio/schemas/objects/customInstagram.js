import { MdPostAdd } from 'react-icons/md';
import { InstagramEmbed } from 'react-social-media-embed';
import React from 'react';

const instagramEmbed = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url={url} width={328} captioned />
    </div>
  );
};
export default {
  name: 'instagram',
  type: 'object',
  title: 'Instagram',
  icon: MdPostAdd,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Instagram Post URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: instagramEmbed,
  },
};
