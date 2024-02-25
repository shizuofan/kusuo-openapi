import {ParamTypeEnum} from "./enum";
import {ReactElement} from 'react';

interface ParamMeta {
    type: ParamTypeEnum;
    record_type?: ParamTypeEnum;
    generic_point?: string; // 泛型类指向
    unit?: string;
    label?: string;
    defaultData?: any;
    def_type?: 'const' | 'expr' | 'variable'
    expr?: string;
    source_type?: 'custom' | 'element'
    configRender?: (
        value: ParamValue,
        setValueV2: (value: ParamValue) => void,
        item_data: any,
        ctx?: any,
    ) => ReactElement;
    enum_list?: { label: string, value: string }[];
    enum_mod?: 'multiple'
    expr_except_type?: ParamTypeEnum;
    notice?: string;
}


interface ParamValue {
    meta: ParamMeta;
    biz_meta?: ParamMeta;
    data?: any;
    id?: string,
}

export {ParamMeta, ParamValue}

