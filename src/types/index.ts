import type { GetLocalIdent } from '../lib';

export type PluginOptions = {
  getLocalIdent: GetLocalIdent;
  hashSeeder: Array<'style' | 'filepath' | 'classname'>;
  includeAttributes: string[];
  includePaths: string[];
  localIdentName: string;
  mode: 'native' | 'mixed' | 'scoped';
  parseExternalStylesheet: boolean;
  parseStyleTag: boolean;
  useAsDefaultScoping: boolean;
};

export interface PreprocessorOptions {
  content: string;
  filename: string;
}

export interface PreprocessorResult {
  code: string;
}

export type CSSModuleList = Record<string, string>;
export type CSSModuleDirectory = Record<string, CSSModuleList>;
