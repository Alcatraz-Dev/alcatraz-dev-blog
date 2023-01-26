import { MdPostAdd } from 'react-icons/md';
import { LinkedInEmbed } from 'react-social-media-embed';
import React from 'react';

const linkedinEmbed = ({ value }) => {
  const { url } = value;
  if (!url) {
    return null;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <LinkedInEmbed url={url} width={328} captioned />
    </div>
  );
};
export default {
  name: 'linkedin',
  type: 'object',
  title: 'Linkedin',
  icon: MdPostAdd,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Linkedin Post URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: linkedinEmbed,
  },
};
