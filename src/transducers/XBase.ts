import { Reducer, Mapper } from "..";
import { id } from "../typeclass/Category";
import { Provider } from "../type/Provider";
import { Transformer } from "./Transformer";
import { XReduced } from "./XReduced";

export abstract class XBase<A, B, C> implements Transformer<A, C> {
  xf: Transformer<B, C>;
  abstract '@@transducer/step': Reducer<A, C | XReduced<C>>;

  '@@transducer/result': Mapper<any, any> = id;
  '@@transducer/init': Provider<any> = () => {
    throw new Error("没有定义init函数");
  };
  constructor(xf: Transformer<B, C>) {
    this.xf = xf;
  };
}
