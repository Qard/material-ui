import React from 'react';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';

import iconButtonCode from '!raw!material-ui/lib/icon-button';
import iconButtonReadmeText from './README';
import iconButtonExampleSimpleCode from '!raw!./ExampleSimple';
import IconButtonExampleSimple from './ExampleSimple';
import iconButtonExampleComplexCode from '!raw!./ExampleComplex';
import IconButtonExampleComplex from './ExampleComplex';
import iconButtonExampleTooltipCode from '!raw!./ExampleTooltip';
import IconButtonExampleTooltip from './ExampleTooltip';
import iconButtonExampleTouchCode from '!raw!./ExampleTouch';
import IconButtonExampleTouch from './ExampleTouch';

const descriptions = {
  simple: 'An Icon Button using an icon specified with the `iconClassName` property, and a `disabled` example.',
  tooltip: 'Icon Buttons showing the available `tooltip` positions.',
  touch: 'The `touch` property adjusts the tooltip size for better visibility on mobile devices.',
  other: 'An Icon Button using a nested [Font Icon](/#/components/font-icon), ' +
  'a nested [SVG Icon](/#/components/svg-icon) and an icon font ligature.',
};

const IconButtonPage = () => (
  <div>
    <MarkdownElement text={iconButtonReadmeText} />
    <CodeExample
      title="Simple example"
      description={descriptions.simple}
      code={iconButtonExampleSimpleCode}
    >
      <IconButtonExampleSimple/>
    </CodeExample>
    <CodeExample
      title="Further examples"
      description={descriptions.other}
      code={iconButtonExampleComplexCode}
    >
      <IconButtonExampleComplex/>
    </CodeExample>
    <CodeExample
      title="Tooltip examples"
      description={descriptions.tooltip}
      code={iconButtonExampleTooltipCode}
    >
      <IconButtonExampleTooltip/>
    </CodeExample>
    <CodeExample
      title="Touch example"
      description={descriptions.touch}
      code={iconButtonExampleTouchCode}
    >
      <IconButtonExampleTouch/>
    </CodeExample>
    <PropTypeDescription code={iconButtonCode} />
  </div>
);

export default IconButtonPage;