import {ParamTypeEnum} from "./enum";

interface ObjectMeta {
    ID?: string;
    label: string;
    desc?: string;
    Table?: string;
    CreateUser?: string;
    CreateTime?: number;
    Length?: number;
    Fields?: Record<string, ObjectFieldMeta>;
    IsDeleted?: boolean;
    SourceID?: string;
    Pointer?: KPointer;
    valueBy?: 'byPointer' | 'byField';
    c_type?: 'mysql' | 'sqlite';
}


interface ObjectFieldMeta {
    ID: string;
    label?: string;
    Type: ParamTypeEnum;
    Order?: number;
    TableKey?: string;
    len: number;
    IsDelete?: boolean;
    desc?: string;
    Value?: any;
    IsSystem?: boolean;
    CreateTime?: number;
    EnableEdit?: boolean;
    Pointer?: KPointer;
    valueBy?: 'byPointer' | 'byConst'
    modified?: boolean;
}

interface KObject {
    ID: string,
    value?: Record<string, any>,
    meta: ObjectMeta,
    isList?: boolean,
    listValue?: KObject[],
}


interface KPointer {
    path?: string[],
    index?: string,
}

interface KQueryOption {
    offset: number;
    size: number;
    search?: Record<string, any>;
    order?: string[];
}

interface FieldOption {
    field: ObjectFieldMeta
    assign_by?: 'point' | 'const' | undefined
    right?: {
        pointer?: string;
        const_value?: any;
    },
    op?: string;
}


interface ObjectFilterOption {
    object: ObjectMeta,
    filters: FieldOption[]
}

interface ObjectUpdateOption {
    object: ObjectMeta,
    pointer: string,
    update_fields: FieldOption[]
}

interface ObjectInsertOption {
    object: ObjectMeta,
    assign_by: 'point' | 'const' | undefined;
    update_fields: FieldOption[]
}


export {
    ObjectMeta,
    ObjectFieldMeta,
    KPointer,
    KObject,
    KQueryOption,
    ObjectFilterOption,
    ObjectUpdateOption,
    ObjectInsertOption,
    FieldOption
}
