import {ParamTypeEnum} from "./enum";
import {ReactElement} from 'react';

interface ParamMeta {
    type: ParamTypeEnum;
    record_type?: ParamTypeEnum;
    genericType?: string; // 泛型类指向
    unit?: string;
    label?: string;
    defaultData?: any;
    def_type?: 'const' | 'expr' | 'variable'
    expr?: string;
    source_type?: 'custom' | 'element'
    configRender?: (
        value: ParamValue,
        setValueV2: (value: ParamValue) => void,
        item_data: any
    ) => ReactElement;
}


interface ParamValue {
    meta: ParamMeta;
    data: any;
    id: string,
    // key: string,
}

export {ParamMeta, ParamValue}

