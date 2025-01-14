import { expect } from 'chai';
import * as t from '../../src/index';


describe('isNotNullOrUndefined', () => {

   it('can be used as an array filter and typeguard', () => {

      const arrA = [ 0, 1, 2, null, 3, undefined, 4, '', 'foo' ];

      const arrC = arrA.filter(t.isNotNullOrUndefined);

      // Cannot assign `arrB = arrA` since arrB won't allow null or undefined.
      // CAN assign `arrB = arrC` since arrC has now had all null and undefined values
      // removed.
      const arrB: (number | string)[] = arrC;

      expect(arrB).to.eql([ 0, 1, 2, 3, 4, '', 'foo' ]);

   });

});
