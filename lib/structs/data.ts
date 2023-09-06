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
}

interface KPointer {
    path?: string[],
    index?: string,
}


export {ObjectMeta, ObjectFieldMeta, KPointer}
