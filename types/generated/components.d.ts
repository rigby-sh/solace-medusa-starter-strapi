import type { Struct, Schema } from '@strapi/strapi';

export interface BlogContentVideoEmbedBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_video_embed_blocks';
  info: {
    displayName: 'Video Embed Block';
    icon: 'video';
    description: 'A block for embedding videos from URLs or with embed code.';
  };
  attributes: {
    embedUrl: Schema.Attribute.String;
    embedCode: Schema.Attribute.Text;
  };
}

export interface BlogContentTextParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_text_paragraphs';
  info: {
    displayName: 'Text Paragraph';
    icon: 'align-left';
    description: 'A simple paragraph of text with rich text capabilities.';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlogContentSingleImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_single_image_blocks';
  info: {
    displayName: 'Single Image Block';
    icon: 'image';
    description: 'A block for a single image with optional caption and alt text.';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    caption: Schema.Attribute.String;
    altText: Schema.Attribute.String;
  };
}

export interface BlogContentQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_quote_blocks';
  info: {
    displayName: 'Quote Block';
    icon: 'quote-left';
    description: 'A block for displaying a quote.';
  };
  attributes: {
    quoteText: Schema.Attribute.Text & Schema.Attribute.Required;
    author: Schema.Attribute.String;
  };
}

export interface BlogContentImageGalleryBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_image_gallery_blocks';
  info: {
    displayName: 'Image Gallery Block';
    icon: 'images';
    description: 'A block for an image gallery.';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    galleryTitle: Schema.Attribute.String;
  };
}

export interface BlogContentCodeSnippet extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_code_snippets';
  info: {
    displayName: 'Code Snippet';
    icon: 'code';
    description: 'A block for displaying code snippets.';
  };
  attributes: {
    code: Schema.Attribute.Text & Schema.Attribute.Required;
    language: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-content.video-embed-block': BlogContentVideoEmbedBlock;
      'blog-content.text-paragraph': BlogContentTextParagraph;
      'blog-content.single-image-block': BlogContentSingleImageBlock;
      'blog-content.quote-block': BlogContentQuoteBlock;
      'blog-content.image-gallery-block': BlogContentImageGalleryBlock;
      'blog-content.code-snippet': BlogContentCodeSnippet;
    }
  }
}
