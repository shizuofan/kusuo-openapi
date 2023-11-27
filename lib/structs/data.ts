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
    modified?: boolean;
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

interface Expression {
    left: ObjectFieldMeta
    assign_by?: 'point' | 'const' | undefined
    right?: {
        pointer?: string;
        const_value?: any;
        value?: any;
    },
    op?: string;
}


interface ObjectSelectOption {
    object: ObjectMeta,
    filters: Expression[]
}

interface RecordUpdateOption {
    object: ObjectMeta,
    pointer: string,
    update_fields: Expression[]
}

interface ObjectInsertOption {
    object: ObjectMeta,
    pointer: string,
    assign_by: 'point' | 'const' | undefined;
    insert_fields: Expression[]
}


export {
    ObjectMeta,
    ObjectFieldMeta,
    KQueryOption,
    ObjectSelectOption,
    RecordUpdateOption,
    ObjectInsertOption,
    Expression
}
