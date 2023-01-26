export default {
  title: 'Rich Body',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Numbered List', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'customImage',
    },
    {
      type: 'customCode',
    },
    {
      type: 'youtube',
    },
    {
      type: 'instagram',
    },
    {
      type: 'facebook',
    },
    {
      type: 'linkedin',
    },
    {
      type: 'twitter',
    },

    {
      type: 'pinterest',
    },
    {
      type: 'tiktok',
    },
    {
      type: 'assets',
    },
  ],
};
