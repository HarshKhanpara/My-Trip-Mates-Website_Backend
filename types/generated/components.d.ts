import type { Struct, Schema } from '@strapi/strapi';

export interface HighlightsPricingDetails extends Struct.ComponentSchema {
  collectionName: 'components_highlights_pricing_details';
  info: {
    displayName: 'pricingDetails';
    description: '';
  };
  attributes: {
    EarlyBird: Schema.Attribute.String;
    Normal: Schema.Attribute.String;
  };
}

export interface HighlightsInclusions extends Struct.ComponentSchema {
  collectionName: 'components_highlights_inclusions';
  info: {
    displayName: 'inclusions';
    description: '';
  };
  attributes: {
    Inclusion1: Schema.Attribute.String;
    Inclusion2: Schema.Attribute.String;
    Inclusion3: Schema.Attribute.String;
    Inclusion4: Schema.Attribute.String;
    Inclusion5: Schema.Attribute.String;
  };
}

export interface HighlightsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_highlights_highlights';
  info: {
    displayName: 'Highlights';
    description: '';
  };
  attributes: {
    Highlight1: Schema.Attribute.String;
    Highlight2: Schema.Attribute.String;
    Highlight3: Schema.Attribute.String;
    Highlight4: Schema.Attribute.String;
    Highlight5: Schema.Attribute.String;
    Highlight6: Schema.Attribute.String;
    Highlight7: Schema.Attribute.String;
    Highlight8: Schema.Attribute.String;
    Highlight9: Schema.Attribute.String;
    Highlight10: Schema.Attribute.String;
  };
}

export interface HighlightsGroup extends Struct.ComponentSchema {
  collectionName: 'components_highlights_groups';
  info: {
    displayName: 'group';
    description: '';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Location: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HighlightsGroupMembers extends Struct.ComponentSchema {
  collectionName: 'components_highlights_group_members';
  info: {
    displayName: 'GroupMembers';
    description: '';
  };
  attributes: {
    Group: Schema.Attribute.Component<'highlights.group', true>;
  };
}

export interface HighlightsGroupDataTrip extends Struct.ComponentSchema {
  collectionName: 'components_highlights_group_data_trips';
  info: {
    displayName: 'groupDataTrip';
    description: '';
  };
  attributes: {
    FirstImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    SecondImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ThirdImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HighlightsGalleryImages extends Struct.ComponentSchema {
  collectionName: 'components_highlights_gallery_images';
  info: {
    displayName: 'galleryImages';
    description: '';
  };
  attributes: {
    Image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HighlightsExclusions extends Struct.ComponentSchema {
  collectionName: 'components_highlights_exclusions';
  info: {
    displayName: 'exclusions';
    description: '';
  };
  attributes: {
    Exclusion1: Schema.Attribute.String;
    Exclusion2: Schema.Attribute.String;
    Exclusion3: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'highlights.pricing-details': HighlightsPricingDetails;
      'highlights.inclusions': HighlightsInclusions;
      'highlights.highlights': HighlightsHighlights;
      'highlights.group': HighlightsGroup;
      'highlights.group-members': HighlightsGroupMembers;
      'highlights.group-data-trip': HighlightsGroupDataTrip;
      'highlights.gallery-images': HighlightsGalleryImages;
      'highlights.exclusions': HighlightsExclusions;
    }
  }
}
