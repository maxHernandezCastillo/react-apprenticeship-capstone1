// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { enableFetchMocks } from 'jest-fetch-mock';

library.add(fas, far);

//jest.mock(fetchMock.sandbox().mock('https://www.googleapis.com/', 200));
enableFetchMocks();
