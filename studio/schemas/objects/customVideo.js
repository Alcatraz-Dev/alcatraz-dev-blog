import { MdVideoCall } from 'react-icons/md';
import getYouTubeId from 'get-youtube-id';
import React from 'react';

const YouTubeEmbed = ({ value }) => {
  const id = getYouTubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing Youtube URL</div>;
  }
  return (
    <iframe
      title="Youtube"
      width={560}
      height={315}
      src={url}
      framBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className=" container-iframe "
    />
  );
};
export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  icon: MdVideoCall,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YouTubeEmbed,
  },
};
