import {ParamTypeEnum} from "./enum";
import {ReactElement} from 'react';

interface ParamMeta {
    type: ParamTypeEnum;
    unit?: string;
    filter?: any;
    label?: string;
    ObjectConfig?: {
        NeedDetail: boolean,
        IsArray: boolean,
    };
    RecordConfig?: {
        RecordType?: ParamTypeEnum,
        ListItemType?: ParamTypeEnum,
    };
    defaultData?: any;
    configRender?: (
        value: ParamValue,
        setValue: (meta: ParamValue, value: any) => void, item_data: any) => ReactElement;
}


interface ParamValue {
    meta: ParamMeta;
    data: any;
    id: string,
    key: string,
}

export {ParamMeta, ParamValue}

