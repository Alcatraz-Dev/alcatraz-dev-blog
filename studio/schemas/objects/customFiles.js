import { MdPostAdd } from 'react-icons/md';

export default {
  name: 'assets',
  type: 'object',
  title: 'Custom File',
  icon: MdPostAdd,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'File URL',
    },
  ],
};
