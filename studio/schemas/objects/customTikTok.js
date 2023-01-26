import { MdPostAdd } from 'react-icons/md';
import { TikTokEmbed } from 'react-social-media-embed';
import React from 'react';

const tikTokEmbed = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TikTokEmbed url={url} width={328} captioned />
    </div>
  );
};
export default {
  name: 'tiktok',
  type: 'object',
  title: 'Tik Tok',
  icon: MdPostAdd,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Tik Tok Post URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: tikTokEmbed,
  },
};
