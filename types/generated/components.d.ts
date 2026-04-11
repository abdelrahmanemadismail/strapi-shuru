import type { Schema, Struct } from '@strapi/strapi';

export interface HomeCtaFooter extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_footers';
  info: {
    description: 'Call to action section at the bottom';
    displayName: 'CTA Footer';
    icon: 'phone';
  };
  attributes: {
    alternativeLink: Schema.Attribute.String;
    alternativeText: Schema.Attribute.String;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButtonLink: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: 'Homepage hero section';
    displayName: 'Hero';
    icon: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'videos'>;
    primaryCtaLink: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaText: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaLink: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeOverview extends Struct.ComponentSchema {
  collectionName: 'components_home_overviews';
  info: {
    description: 'Overview of solutions section';
    displayName: 'Overview';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.overview-card', true>;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    introText: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeOverviewCard extends Struct.ComponentSchema {
  collectionName: 'components_home_overview_cards';
  info: {
    description: 'Card for the overview section';
    displayName: 'Overview Card';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials_sections';
  info: {
    description: 'Configuration for the testimonials section';
    displayName: 'Testimonials Section';
    icon: 'quote';
  };
  attributes: {
    introText: Schema.Attribute.Text;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeValue extends Struct.ComponentSchema {
  collectionName: 'components_home_values';
  info: {
    description: 'Why us section';
    displayName: 'Value Proposition';
    icon: 'star';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    introText: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'home.value-point', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeValuePoint extends Struct.ComponentSchema {
  collectionName: 'components_home_value_points';
  info: {
    description: 'Item in the Why Us / Value section';
    displayName: 'Value Point';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_columns';
  info: {
    description: 'A column of links in the footer';
    displayName: 'Footer Column';
    icon: 'align-justify';
  };
  attributes: {
    links: Schema.Attribute.Component<'layout.navigation-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_items';
  info: {
    description: 'Individual navigation menu item';
    displayName: 'Navigation Item';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    onHeader: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    onSideBar: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    subItems: Schema.Attribute.Component<'layout.navigation-sub-item', true>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutNavigationMenu extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_menus';
  info: {
    description: 'Main navigation menu with primary and secondary links';
    displayName: 'Navigation Menu';
    icon: 'apps';
  };
  attributes: {
    primaryMenuItems: Schema.Attribute.Component<
      'layout.navigation-item',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
          min: 0;
        },
        number
      >;
  };
}

export interface LayoutNavigationSubItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_sub_items';
  info: {
    description: 'Dropdown menu sub-item for navigation';
    displayName: 'Navigation Sub Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_social_links';
  info: {
    description: 'Social media platform link';
    displayName: 'Social Link';
    icon: 'twitter';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      [
        'Facebook',
        'Twitter',
        'Instagram',
        'LinkedIn',
        'YouTube',
        'TikTok',
        'GitHub',
      ]
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutTopBar extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_bars';
  info: {
    displayName: 'Top Bar';
    icon: 'bullhorn';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    message: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedChallengeCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_challenge_cards';
  info: {
    displayName: 'Challenge Card';
  };
  attributes: {
    intervention: Schema.Attribute.Text;
    pain: Schema.Attribute.String;
    result: Schema.Attribute.String;
  };
}

export interface SharedChallengesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_challenges_sections';
  info: {
    description: 'To handle the Pain Points on the Solutions Page.';
    displayName: 'Challenges Section';
  };
  attributes: {
    challenges: Schema.Attribute.Component<'shared.challenge-card', true>;
    introText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_quote_sections';
  info: {
    description: 'A standalone quote highlight on the Methodology Page.';
    displayName: 'Quote Section';
  };
  attributes: {
    author: Schema.Attribute.String;
    quoteText: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata component for pages and articles';
    displayName: 'SEO Metadata';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    meta_description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    meta_keywords: Schema.Attribute.String;
    meta_title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    og_image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTimelineSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_sections';
  info: {
    description: 'To handle the Linear Process/Timeline on the Methodology Page.';
    displayName: 'Timeline Section';
  };
  attributes: {
    steps: Schema.Attribute.Component<'shared.timeline-step', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTimelineStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_timeline_steps';
  info: {
    description: '';
    displayName: 'Timeline Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.cta-footer': HomeCtaFooter;
      'home.hero': HomeHero;
      'home.overview': HomeOverview;
      'home.overview-card': HomeOverviewCard;
      'home.testimonials-section': HomeTestimonialsSection;
      'home.value': HomeValue;
      'home.value-point': HomeValuePoint;
      'layout.footer-column': LayoutFooterColumn;
      'layout.navigation-item': LayoutNavigationItem;
      'layout.navigation-menu': LayoutNavigationMenu;
      'layout.navigation-sub-item': LayoutNavigationSubItem;
      'layout.social-link': LayoutSocialLink;
      'layout.top-bar': LayoutTopBar;
      'shared.challenge-card': SharedChallengeCard;
      'shared.challenges-section': SharedChallengesSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.quote-section': SharedQuoteSection;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.timeline-section': SharedTimelineSection;
      'shared.timeline-step': SharedTimelineStep;
    }
  }
}
