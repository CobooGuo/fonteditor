/**
 * @file 求解四次方程贝塞尔根
 * @author mengke01(kekee000@gmail.com)
 */

import quarticEquation from './quarticEquation';

/**
 * 求解四次方程贝塞尔根
 *
 * @param {number} a a系数
 * @param {number} b b系数
 * @param {number} c c系数
 * @param {number} d d系数
 * @param {number} e e系数
 * @return {Array|boolean} 系数解
 */
export default function bezierQuarticEquation(a, b, c, d, e) {
    let result = quarticEquation(a, b, c, d, e);

    if (!result) {
        return result;
    }

    let filter = result.filter(function (item) {
        return item >= 0 && item <= 1;
    });

    return filter.length
        ? filter
        : false;
}
