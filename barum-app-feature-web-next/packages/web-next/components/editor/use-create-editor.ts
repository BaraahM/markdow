'use client';
import * as React from 'react';

// Replace deprecated imports
import type { Value } from 'platejs';
import { withProps } from '@udecode/cn';

// Updated plugin imports
import { AIPlugin } from '@platejs/ai/react';
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from '@platejs/basic-nodes/react';
import { BlockquotePlugin } from '@platejs/basic-nodes/react';
import { CalloutPlugin } from '@platejs/callout/react';
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from '@platejs/code-block/react';
import { CommentPlugin } from '@platejs/comment/react';
import { DatePlugin } from '@platejs/date/react';
import { EmojiInputPlugin } from '@platejs/emoji/react';
import { ExcalidrawPlugin } from '@platejs/excalidraw/react';
import { HeadingPlugin, TocPlugin } from '@platejs/basic-nodes/react';
import { HighlightPlugin } from '@platejs/basic-nodes/react';
import { HorizontalRulePlugin } from '@platejs/basic-nodes/react';
import { KbdPlugin } from '@platejs/basic-nodes/react';
import { ColumnItemPlugin, ColumnPlugin } from '@platejs/layout/react';
import { LinkPlugin } from '@platejs/link/react';
import {
  EquationPlugin,
  InlineEquationPlugin,
} from '@platejs/math/react';
import {
  AudioPlugin,
  FilePlugin,
  ImagePlugin,
  MediaEmbedPlugin,
  PlaceholderPlugin,
  VideoPlugin,
} from '@platejs/media/react';
import {
  MentionInputPlugin,
  MentionPlugin,
} from '@platejs/mention/react';
import { SlashInputPlugin } from '@platejs/slash-command/react';
import { SuggestionPlugin } from '@platejs/suggestion/react';
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from '@platejs/table/react';
import { TogglePlugin } from '@platejs/toggle/react';
import {
  type CreatePlateEditorOptions,
  ParagraphPlugin,
  PlateLeaf,
  usePlateEditor,
} from 'platejs/react';

import { copilotPlugins } from '@/components/editor/plugins/copilot-plugins';
import { editorPlugins } from '@/components/editor/plugins/editor-plugins';
import { FixedToolbarPlugin } from '@/components/editor/plugins/fixed-toolbar-plugin';
import { FloatingToolbarPlugin } from '@/components/editor/plugins/floating-toolbar-plugin';
import { AILeaf } from '@/components/ui/ai-leaf';
import { BlockquoteElement } from '@/components/ui/blockquote-element';
import { CalloutElement } from '@/components/ui/callout-element';
import { CodeBlockElement } from '@/components/ui/code-block-element';
import { CodeLeaf } from '@/components/ui/code-leaf';
import { CodeLineElement } from '@/components/ui/code-line-element';
import { CodeSyntaxLeaf } from '@/components/ui/code-syntax-leaf';
import { ColumnElement } from '@/components/ui/column-element';
import { ColumnGroupElement } from '@/components/ui/column-group-element';
import { CommentLeaf } from '@/components/ui/comment-leaf';
import { DateElement } from '@/components/ui/date-element';
import { EmojiInputElement } from '@/components/ui/emoji-input-element';
import { EquationElement } from '@/components/ui/equation-element';
import { ExcalidrawElement } from '@/components/ui/excalidraw-element';
import { HeadingElement } from '@/components/ui/heading-element';
import { HighlightLeaf } from '@/components/ui/highlight-leaf';
import { HrElement } from '@/components/ui/hr-element';
import { ImageElement } from '@/components/ui/image-element';
import { InlineEquationElement } from '@/components/ui/inline-equation-element';
import { KbdLeaf } from '@/components/ui/kbd-leaf';
import { LinkElement } from '@/components/ui/link-element';
import { MediaAudioElement } from '@/components/ui/media-audio-element';
import { MediaEmbedElement } from '@/components/ui/media-embed-element';
import { MediaFileElement } from '@/components/ui/media-file-element';
import { MediaPlaceholderElement } from '@/components/ui/media-placeholder-element';
import { MediaVideoElement } from '@/components/ui/media-video-element';
import { MentionElement } from '@/components/ui/mention-element';
import { MentionInputElement } from '@/components/ui/mention-input-element';
import { ParagraphElement } from '@/components/ui/paragraph-element';
import { withPlaceholders } from '@/components/ui/placeholder';
import { SlashInputElement } from '@/components/ui/slash-input-element';
import { SuggestionLeaf } from '@/components/ui/suggestion-leaf';
import {
  TableCellElement,
  TableCellHeaderElement,
} from '@/components/ui/table-cell-element';
import { TableElement } from '@/components/ui/table-element';
import { TableRowElement } from '@/components/ui/table-row-element';
import { TocElement } from '@/components/ui/toc-element';
import { ToggleElement } from '@/components/ui/toggle-element';

export const viewComponents = {
  [AudioPlugin.key]: MediaAudioElement,
  [BlockquotePlugin.key]: BlockquoteElement,
  [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
  [CalloutPlugin.key]: CalloutElement,
  [CodeBlockPlugin.key]: CodeBlockElement,
  [CodeLinePlugin.key]: CodeLineElement,
  [CodePlugin.key]: CodeLeaf,
  [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
  [ColumnItemPlugin.key]: ColumnElement,
  [ColumnPlugin.key]: ColumnGroupElement,
  [CommentPlugin.key]: CommentLeaf,
  [DatePlugin.key]: DateElement,
  [EquationPlugin.key]: EquationElement,
  [ExcalidrawPlugin.key]: ExcalidrawElement,
  [FilePlugin.key]: MediaFileElement,
  [HeadingPlugin.key]: withProps(HeadingElement, { variant: 'h1' }),
  'h1': withProps(HeadingElement, { variant: 'h1' }),
  'h2': withProps(HeadingElement, { variant: 'h2' }),
  'h3': withProps(HeadingElement, { variant: 'h3' }),
  'h4': withProps(HeadingElement, { variant: 'h4' }),
  'h5': withProps(HeadingElement, { variant: 'h5' }),
  'h6': withProps(HeadingElement, { variant: 'h6' }),
  [HighlightPlugin.key]: HighlightLeaf,
  [HorizontalRulePlugin.key]: HrElement,
  [ImagePlugin.key]: ImageElement,
  [InlineEquationPlugin.key]: InlineEquationElement,
  [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
  [KbdPlugin.key]: KbdLeaf,
  [LinkPlugin.key]: LinkElement,
  [MediaEmbedPlugin.key]: MediaEmbedElement,
  [MentionPlugin.key]: MentionElement,
  [ParagraphPlugin.key]: ParagraphElement,
  [PlaceholderPlugin.key]: MediaPlaceholderElement,
  [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
  [SubscriptPlugin.key]: withProps(PlateLeaf, { as: 'sub' }),
  [SuggestionPlugin.key]: SuggestionLeaf,
  [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: 'sup' }),
  [TableCellHeaderPlugin.key]: TableCellHeaderElement,
  [TableCellPlugin.key]: TableCellElement,
  [TablePlugin.key]: TableElement,
  [TableRowPlugin.key]: TableRowElement,
  [TocPlugin.key]: TocElement,
  [TogglePlugin.key]: ToggleElement,
  [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
  [VideoPlugin.key]: MediaVideoElement,
};

export const editorComponents = {
  ...viewComponents,
  [AIPlugin.key]: AILeaf,
  [EmojiInputPlugin.key]: EmojiInputElement,
  [MentionInputPlugin.key]: MentionInputElement,
  [SlashInputPlugin.key]: SlashInputElement,
};

export const useCreateEditor = (
  {
    components,
    override,
    placeholders,
    readOnly,
    ...options
  }: {
    components?: Record<string, any>;
    placeholders?: boolean;
    plugins?: any[];
    readOnly?: boolean;
  } & Omit<CreatePlateEditorOptions, 'plugins'> = {},
  deps: any[] = []
) => {
  const initialValue = React.useMemo(() => {
    return [
      {
        children: [{ text: "Co-Founders' Agreement" }],
        type: 'h1',
      },
      {
        children: [{ text: '1. Roles and Responsibilities' }],
        type: 'h1',
      },
      {
        children: [{ text: '1.1 Flexible Roles' }],
        type: 'h2',
      },
      {
        children: [
          {
            text: 'The Co-Founders acknowledge and agree that the roles and responsibilities within the Company will be dynamic and subject to change as the business evolves. Each Co-Founder commits to adapting their role as necessary for the benefit of the Company.',
          },
        ],
        type: 'p',
      },
      {
        children: [{ text: '1.2 Initial Role Allocation' }],
        type: 'h2',
      },
      {
        children: [
          {
            text: 'Notwithstanding the flexible nature of the roles, the initial primary responsibilities of each Co-Founder shall be as follows:',
          },
        ],
        type: 'p',
      },
      {
        children: [
          {
            text: 'Co-Founder 1: [DESCRIPTION OF INITIAL RESPONSIBILITIES]',
          },
        ],
        type: 'p',
      },
      {
        children: [
          {
            text: 'Co-Founder 2: [DESCRIPTION OF INITIAL RESPONSIBILITIES]',
          },
        ],
        type: 'p',
      },
      {
        children: [
          {
            text: 'Co-Founder 3: [DESCRIPTION OF INITIAL RESPONSIBILITIES]',
          },
        ],
        type: 'p',
      },
      {
        children: [{ text: '1.3 Duty to Company Success' }],
        type: 'h2',
      },
      {
        children: [
          {
            text: 'Each Co-Founder hereby affirms and agrees that their primary and overriding obligation shall be to promote and ensure the success of the Company. This obligation shall take precedence over individual interests or preferences in all business-related decisions and actions.',
          },
        ],
        type: 'p',
      },
      {
        children: [{ text: '2. Equity Distribution' }],
        type: 'h1',
      },
      {
        children: [{ text: '2.1 Initial Equity' }],
        type: 'h2',
      },
      {
        children: [
          {
            text: 'The total equity of the Company shall be divided among the Co-Founders as follows:',
          },
        ],
        type: 'p',
      },
      {
        children: [
          {
            text: 'Co-Founder 1: [PERCENTAGE]%',
          },
        ],
        type: 'p',
      },
      {
        children: [
          {
            text: 'Co-Founder 2: [PERCENTAGE]%',
          },
        ],
        type: 'p',
      },
      {
        children: [
          {
            text: 'Co-Founder 3: [PERCENTAGE]%',
          },
        ],
        type: 'p',
      },
      {
        children: [{ text: '2.2 Equity Type' }],
        type: 'h2',
      },
    ];
  }, []);
  
  return usePlateEditor<TValue, (typeof editorPlugins)[number]>(
    {
      override: {
        components: {
          ...(readOnly
            ? viewComponents
            : placeholders
              ? withPlaceholders(editorComponents)
              : editorComponents),
          ...components,
        },
        ...override,
      },

      plugins: [
        ...copilotPlugins,
        ...editorPlugins,
        FixedToolbarPlugin,
        FloatingToolbarPlugin,
      ],
      value: initialValue,
      ...options,
    },
    deps
  );
};
