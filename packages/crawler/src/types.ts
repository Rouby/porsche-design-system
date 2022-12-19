import { TagName } from 'shared/src';
import { Viewport } from 'puppeteer';

/* Generics */

type VersionsAndPrefixesMap<T> = {
  [version: string]: {
    [prefix: string]: T;
  };
};

/* Crawler Config Type */

export type CrawlerConfig = {
  reportFolderName: string;
  dateSplitter: string;
  reportsMaxAge: number;
  jsonSpace: number;
  viewport: Viewport;
};

/* PDS Components info */

export type TagNamesWithPropertyNames = Record<TagName, string[]>;

/* Raw Data */

export type PropValue = boolean | number | string | object;

export type Properties = {
  [propName: string]: PropValue;
};

export type TagNameData = Record<
  TagName,
  {
    properties: Properties;
    slot?: string;
    hostPdsComponent?: TagName;
  }
>;

export type ConsumedTagNamesForVersionsAndPrefixes = VersionsAndPrefixesMap<TagNameData[]>;

/* Aggregated Data */

export type PropertyValuesAggregated = Record<number | string, number>;

export type PropertiesAggregated = {
  [propName: string]: {
    amount: number;
    values: PropertyValuesAggregated;
  };
};

export type TagNameAggregated = {
  amount: number;
  hostPdsComponent: number;
  slot: number;
  properties: PropertiesAggregated;
  unusedProperties: string[];
};

export type TagNamesAggregated = Record<TagName, TagNameAggregated>;

export type AggregatedData = {
  tagNames: TagNamesAggregated;
  unusedTagNames: TagName[];
};

export type AggregatedTagNamesForVersionsAndPrefixes = VersionsAndPrefixesMap<AggregatedData[]>;
