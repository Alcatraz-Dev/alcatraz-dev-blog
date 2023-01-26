import { MdCategory } from 'react-icons/md';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      slug: 'slug',
    },
    prepare({ image, title, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};
