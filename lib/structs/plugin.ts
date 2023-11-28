import {ParamTypeEnum} from "./enum";

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
    ) => Element;
    enum_list?: { label: string, value: string }[];
    enum_mod?: 'multiple'
    expr_except_type?:ParamTypeEnum;
}


interface ParamValue {
    meta: ParamMeta;
    data?: any;
    id?: string,
    // key: string,
}

export {ParamMeta, ParamValue}

