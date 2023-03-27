import type { GetThemedMarkup } from '../helpers';
import {
  forceFocusHoverState,
  forceFocusState,
  forceHoverState,
  generateGUID,
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
  expect(
    await vrtTest(getVisualRegressionTester(viewport), 'radio-button-wrapper', '/#radio-button-wrapper')
  ).toBeFalsy();
});

it('should have no visual regression for :hover + :focus-visible', async () => {
  const vrt = getVisualRegressionStatesTester();
  expect(
    await vrt.test('radio-button-wrapper-states', async () => {
      const page = vrt.getPage();

      const head = `
        <style>
          body { display: grid; grid-template-columns: repeat(2, 50%); }
          p-radio-button-wrapper:not(:last-child), .force-label { margin-bottom: 1rem; }
        </style>`;

      const getElementsMarkup: GetThemedMarkup = (theme) => `
        <p-radio-button-wrapper theme="${theme}" label="When input gets hovered or focused">
          <input type="radio" name="some-name" />
        </p-radio-button-wrapper>
        <div class="force-label">
          <p-radio-button-wrapper theme="${theme}" label="When label gets hovered or focused">
            <input type="radio" name="some-name" />
          </p-radio-button-wrapper>
        </div>
        <p-radio-button-wrapper theme="${theme}" label="Some label" state="error" message="Some error validation message.">
          <input type="radio" name="some-name" />
        </p-radio-button-wrapper>
        <p-radio-button-wrapper theme="${theme}" label="Some label" state="success" message="Some success validation message.">
          <input type="radio" name="some-name" />
        </p-radio-button-wrapper>
        <p-radio-button-wrapper theme="${theme}" label="Some label">
          <input type="radio" name="${generateGUID()}" checked/>
        </p-radio-button-wrapper>
        <p-radio-button-wrapper theme="${theme}" label="Some label" state="error" message="Some error validation message.">
          <input type="radio" name="${generateGUID()}" checked/>
        </p-radio-button-wrapper>
        <p-radio-button-wrapper theme="${theme}" label="Some label" state="success" message="Some success validation message.">
          <input type="radio" name="${generateGUID()}" checked />
        </p-radio-button-wrapper>
        <p-radio-button-wrapper theme="${theme}">
          <span slot="label">
            Slotted label
            <span>
              and some slotted, deeply nested <a href="#">anchor</a>.
            </span>
          </span>
          <input type="radio" name="some-name" />
        </p-radio-button-wrapper>
        <p-radio-button-wrapper theme="${theme}" label="Some label" state="error">
          <input type="radio" name="some-name" />
          <span slot="message">
            Slotted error message
            <span>
              and some slotted, deeply nested <a href="#">anchor</a>.
            </span>
          </span>
        </p-radio-button-wrapper>
        <p-radio-button-wrapper theme="${theme}" label="Some label" state="success">
          <input type="radio" name="some-name" />
          <span slot="message">
            Slotted success message
            <span>
              and some slotted, deeply nested <a href="#">anchor</a>.
            </span>
          </span>
        </p-radio-button-wrapper>`;

      await setContentWithDesignSystem(page, getThemedBodyMarkup(getElementsMarkup), {
        injectIntoHead: head,
      });

      await forceHoverState(page, '.hover p-radio-button-wrapper input[type="radio"]');
      await forceHoverState(page, '.hover .force-label > p-radio-button-wrapper >>> span');
      await forceHoverState(page, '.hover p-radio-button-wrapper span a');
      await forceFocusState(page, '.focus p-radio-button-wrapper input[type="radio"]');
      await forceFocusState(page, '.focus p-radio-button-wrapper span a');
      await forceFocusHoverState(page, '.focus-hover p-radio-button-wrapper input[type="radio"]');
      await forceFocusState(page, '.focus-hover .force-label > p-radio-button-wrapper input[type="radio"]');
      await forceHoverState(page, '.focus-hover .force-label > p-radio-button-wrapper >>> span');
      await forceFocusHoverState(page, '.focus-hover p-radio-button-wrapper span a');
    })
  ).toBeFalsy();
});
