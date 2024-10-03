import type { Struct, Schema } from '@strapi/strapi';

export interface HomepageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_banners';
  info: {
    displayName: 'HeroBanner';
    icon: '';
  };
  attributes: {
    Headline: Schema.Attribute.String & Schema.Attribute.Required;
    Text: Schema.Attribute.Text;
    CTA: Schema.Attribute.Component<'homepage.cta', false>;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface HomepageCta extends Struct.ComponentSchema {
  collectionName: 'components_homepage_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    BtnText: Schema.Attribute.String;
    BtnLink: Schema.Attribute.String;
  };
}

export interface ColorHexColorHex extends Struct.ComponentSchema {
  collectionName: 'components_color_hex_color_hexes';
  info: {
    displayName: 'ColorHex';
    icon: 'brush';
  };
  attributes: {
    Color: Schema.Attribute.String;
  };
}

export interface ColorImageColorImage extends Struct.ComponentSchema {
  collectionName: 'components_color_image_color_images';
  info: {
    displayName: 'ColorImage';
    icon: 'picture';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.hero-banner': HomepageHeroBanner;
      'homepage.cta': HomepageCta;
      'color-hex.color-hex': ColorHexColorHex;
      'color-image.color-image': ColorImageColorImage;
    }
  }
}
