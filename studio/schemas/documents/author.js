import { MdPerson } from 'react-icons/md';

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLenghtn: 96,
      },
    },
    {
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      image: 'profileImage',
      title: 'name',
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
