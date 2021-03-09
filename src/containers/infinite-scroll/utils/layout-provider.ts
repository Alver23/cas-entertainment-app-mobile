/* eslint no-param-reassign: 0 */
// Dependencies
import { LayoutProvider } from 'recyclerlistview';

import { SCREEN_WIDTH } from '@commons/app';

export default class LayoutUtil {
  static getWindowWidth() {
    return Math.round(SCREEN_WIDTH * 1000) / 1000 - 6;
  }

  static getLayoutProvider(value?: number) {
    switch (value) {
      case 0:
        return new LayoutProvider(
          () => {
            return 'VSEL';
          },
          (type, dim, index) => {
            const columnWidth = LayoutUtil.getWindowWidth() / 3;
            switch (type) {
              case 'VSEL':
                if (index % 3 === 0) {
                  dim.width = 3 * columnWidth;
                  dim.height = 300;
                } else if (index % 2 === 0) {
                  dim.width = 2 * columnWidth;
                  dim.height = 250;
                } else {
                  dim.width = columnWidth;
                  dim.height = 250;
                }
                break;
              default:
                dim.width = 100;
                dim.heigh = 100;
            }
          },
        );
      default:
        return new LayoutProvider(
          () => {
            return 'VSEL';
          },
          (type, dim) => {
            switch (type) {
              case 'VSEL':
                dim.width = LayoutUtil.getWindowWidth();
                dim.height = 52;
                break;
              default:
                dim.width = 0;
                dim.heigh = 52;
            }
          },
        );
    }
  }
}
