import { MdPostAdd } from 'react-icons/md';
import { TwitterEmbed } from 'react-social-media-embed';
import React from 'react';

const twitterEmbed = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TwitterEmbed url={url} width={328} captioned />
    </div>
  );
};
export default {
  name: 'twitter',
  type: 'object',
  title: 'Twitter',
  icon: MdPostAdd,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Twitter Post URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: twitterEmbed,
  },
};
