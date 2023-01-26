/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom documents schema //
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';
import featured from './documents/featured';
// import custom objects schema //
import customImage from './objects/customImage';
import richText from './objects/richText';
import customCode from './objects/customCode';
import normalText from './objects/normalText';
import customVideo from './objects/customVideo';
import customInstagram from './objects/customInstagram';
import customFacebook from './objects/customFacebook';
import customLinkedin from './objects/customLinkedin';
import customTwitter from './objects/customTwitter';
import customFiles from './objects/customFiles';
import customPinterest from './objects/customPinterest';
import customTikTok from './objects/customTikTok';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    blog,
    author,
    category,
    featured,

    // objects
    customImage,
    richText,
    customCode,
    normalText,
    customVideo,
    customInstagram,
    customFacebook,
    customLinkedin,
    customTwitter,
    customFiles,
    customPinterest,
    customTikTok,
  ]),
});
