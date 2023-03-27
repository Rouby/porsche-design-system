import type { GetThemedMarkup } from '../helpers';
import {
  forceFocusHoverState,
  forceFocusState,
  forceHoverState,
  getThemedBodyMarkup,
  setContentWithDesignSystem,
} from '../helpers';
import {
  defaultViewports,
  getVisualRegressionStatesTester,
  getVisualRegressionTester,
  vrtTest,
} from '@porsche-design-system/shared/testing';

it.each(defaultViewports)('should have no visual regression for viewport %s', async (viewport) => {
  expect(await vrtTest(getVisualRegressionTester(viewport), 'checkbox-wrapper', '/#checkbox-wrapper')).toBeFalsy();
});

it('should have no visual regression for :hover + :focus-visible', async () => {
  const vrt = getVisualRegressionStatesTester();
  expect(
    await vrt.test('checkbox-wrapper-states', async () => {
      const page = vrt.getPage();

      const head = `
        <style>
          body { display: grid; grid-template-columns: repeat(2, 50%); }
          p-checkbox-wrapper:not(:last-child), .force-label { margin-bottom: 1rem; }
        </style>`;

      const getElementsMarkup: GetThemedMarkup = (theme) => `
        <p-checkbox-wrapper theme="${theme}" label="When input gets hovered or focused">
          <input type="checkbox" name="some-name" />
        </p-checkbox-wrapper>
        <div class="force-label">
          <p-checkbox-wrapper theme="${theme}" label="When label gets hovered or focused">
            <input type="checkbox" name="some-name" />
          </p-checkbox-wrapper>
        </div>
        <p-checkbox-wrapper theme="${theme}" label="Some label" state="error" message="Some error validation message.">
          <input type="checkbox" name="some-name" />
        </p-checkbox-wrapper>
        <p-checkbox-wrapper theme="${theme}" theme="${theme}" label="Some label" state="success" message="Some success validation message.">
          <input type="checkbox" name="some-name" />
        </p-checkbox-wrapper>
        <p-checkbox-wrapper theme="${theme}" label="Some label">
          <input type="checkbox" name="some-name" checked/>
        </p-checkbox-wrapper>
        <p-checkbox-wrapper theme="${theme}" label="Some label" state="error" message="Some error validation message.">
          <input type="checkbox" name="some-name" checked/>
        </p-checkbox-wrapper>
        <p-checkbox-wrapper theme="${theme}" label="Some label" state="success" message="Some success validation message.">
          <input type="checkbox" name="some-name" checked />
        </p-checkbox-wrapper>
        <p-checkbox-wrapper theme="${theme}">
          <span slot="label">
            Slotted label
            <span>
              and some slotted, deeply nested <a href="#">anchor</a>.
            </span>
          </span>
          <input type="checkbox" name="some-name" />
        </p-checkbox-wrapper>
        <p-checkbox-wrapper theme="${theme}" label="Some label" state="error">
          <input type="checkbox" name="some-name" />
          <span slot="message">
            Slotted error message
            <span>
              and some slotted, deeply nested <a href="#">anchor</a>.
            </span>
          </span>
        </p-checkbox-wrapper>
        <p-checkbox-wrapper theme="${theme}" label="Some label" state="success">
          <input type="checkbox" name="some-name" />
          <span slot="message">
            Slotted success message
            <span>
              and some slotted, deeply nested <a href="#">anchor</a>.
            </span>
          </span>
        </p-checkbox-wrapper>`;

      await setContentWithDesignSystem(page, getThemedBodyMarkup(getElementsMarkup), {
        injectIntoHead: head,
      });

      await forceHoverState(page, '.hover p-checkbox-wrapper input[type="checkbox"]');
      await forceHoverState(page, '.hover .force-label > p-checkbox-wrapper >>> span');
      await forceHoverState(page, '.hover p-checkbox-wrapper span a');
      await forceFocusState(page, '.focus p-checkbox-wrapper input[type="checkbox"]');
      await forceFocusState(page, '.focus p-checkbox-wrapper span a');
      await forceFocusHoverState(page, '.focus-hover p-checkbox-wrapper input[type="checkbox"]');
      await forceFocusState(page, '.focus-hover .force-label > p-checkbox-wrapper input[type="checkbox"]');
      await forceHoverState(page, '.focus-hover .force-label > p-checkbox-wrapper >>> span');
      await forceFocusHoverState(page, '.focus-hover p-checkbox-wrapper span a');
    })
  ).toBeFalsy();
});
