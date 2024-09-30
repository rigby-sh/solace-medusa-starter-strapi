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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.hero-banner': HomepageHeroBanner;
      'homepage.cta': HomepageCta;
    }
  }
}
