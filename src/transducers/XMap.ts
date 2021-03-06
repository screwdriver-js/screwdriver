import { Reducer, Mapper } from "..";
import { Transducer } from "./Transducer";
import { Transformer } from "./Transformer";
import { XBase } from "./XBase";
import { XReduced } from "./XReduced";


export class XMap<A, B, C> extends XBase<A, B, C> {
  readonly mapper: Mapper<A, B>;
  '@@transducer/step' = (acc: C, item: A) => {
    return this.xf["@@transducer/step"](acc, this.mapper(item));
  };

  constructor(mapper: Mapper<A, B>, xf: Transformer<B, C>) {
    super(xf);
    this.mapper = mapper;
  }
}


export const xmap = function <A, B, C>(mapper: Mapper<A, B>): Transducer<A, B, C> {
  return function (xf: Transformer<B, C>): Transformer<A, C> {
    return new XMap(mapper, xf);
  };
};
