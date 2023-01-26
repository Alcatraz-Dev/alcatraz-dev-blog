import React, { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import getYouTubeId from 'get-youtube-id';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy, FaRegClipboard } from 'react-icons/fa';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import { InstagramEmbed , FacebookEmbed , LinkedInEmbed, TwitterEmbed, PinterestEmbed, TikTokEmbed } from 'react-social-media-embed';
import { Link } from 'gatsby';
import Button from './buttons/Button';



const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
    h2:({children})=><h2 style={{color:'#ffffff'}}>{children}</h2>,
    h3:({children})=><h3 style={{color:'#ffffff'}}>{children}</h3>,
    h4:({children})=><h4 style={{color:'#ffffff'}}>{children}</h4>,
    h5:({children})=><h5 style={{color:'#ffffff'}}>{children}</h5>,
    h6:({children})=><h6 style={{color:'#ffffff'}}>{children}</h6>,
    blockquote:({ children})=><blockquote 
    style={{marginTop:"20px", borderInlineStartStyle: "solid",borderInlineStartColor:'#74a74f'}}>
      <div style={{padding:"20px", color:"#8DB470" ,fontSize:'1.5rem'}}>
        {children}</div></blockquote>
  },
  lists:{
    bullet:({children})=>
    <div style={{ marginRight:"20px", marginTop:"20px"}} >
      <ul style={{ listStyleType: "circle",color:'#74a74f'}} >
      <div style={{color:'#ffffff',padding:'20px'}}>{children}</div></ul>
    </div>,
    
    number:({children})=> <div style={{ marginRight:"20px", marginTop:"20px"}} ><ol style={{ listStyleType: "lower-alpha",color:'#74a74f'}}>
       <div style={{color:'#ffffff',padding:'20px'}}>{children}</div></ol>
    </div>
    
  },
  marks:{
    annotations:{
      link:({children,value})=>{
      const rel=!value.href.startWith("/")?"noreferrer noopener":underfined;
      return(
        <Link to={value.href} href={value.href} rel={rel} target={'_blank'}style={{color:'blue'}}>
         <div style={{textDecoration:'underline',textDecorationColor:'#74a74f'}}>{children}</div>
        </Link>
      )
    }
  }
  },
  types: {
    customCode: ({ value }) => {
      const [isCopied, setIsCopied] = useState(false);

      return (
        <div className="container-code-lg">
          <CopyToClipboard

            text={value.code.code}
            onCopy={() => setIsCopied(true)}
          >
            <button type="button" className="Copy-Button">
              {isCopied ? <FaRegClipboard /> : <FaRegCopy />}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter
            style={theme}
            className="code-font"
            language={value.code.language}
          >
            {String(value.code.code).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      );
    },
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);
      const image = {
        url: imageData.url,
        width,
        height,
      };
      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });
      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="container-PostImage"
        />
      );
    },
    youtube: ({ value }) => {
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
    },
    instagram: ({ value }) => {
     
      const {url} = value;
      if (!url) {
        return null;
      }
      return (
       
        <InstagramEmbed  className=" container-iframe " url={url} width={"100%"}  captioned />
     
      );
    },
    facebook: ({ value }) => {
     
      const {url} = value;
      if (!url) {
        return null;
      }
      return (
       
        <FacebookEmbed  className=" container-iframe " url={url} width={"100%"}  captioned />
     
      );
    },
    linkedin: ({ value }) => {
     
      const {url} = value;
      if (!url) {
        return null;
      }
      return (
        <LinkedInEmbed  className=" container-iframe " url={url} width={"100%"}  captioned />
     
      );
    },
    twitter: ({ value }) => {
     
      const {url} = value;
      if (!url) {
        return null;
      }
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TwitterEmbed  className=" container-iframe "url={url}   captioned/>
     </div>
      );
    },
    pinterest: ({ value }) => {
     
      const {url} = value;
      if (!url) {
        return null;
      }
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PinterestEmbed  className=" container-iframe "url={url}   captioned/>
     </div>
      );
    },
    tiktok: ({ value }) => {
     
      const {url} = value;
      if (!url) {
        return null;
      }
      return (
      
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TikTokEmbed  className=" container-iframe "url={url}   captioned/>
     </div>
    
      );
    },
   
    },
   
  };

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;
