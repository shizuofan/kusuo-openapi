import {ElementProp} from "./element_prop";

interface ParamMeta {
    type: string;
    unit?: string;
    filter?: any;
    label?: string;
    ObjectConfig?: {
        InputType?: ObjectInputType,
        IsArray: boolean,
    };
    defaultData?: any;
}

enum ObjectInputType {
    AllFieldEditor = 'all_field', // 全字段set
    AddEditField = 'add_edit_field', // 可添加字段
    Filter = 'filter', // 筛选器
}

interface ParamValue {
    meta: ParamMeta;
    data: any;
    id: string,
    key: string,
}

interface IComponentEntity {
    GetDefaultConfig(): ElementProp;

    renderRunner(): (prop: ElementProp) => any;

    renderPreview(): (prop: ElementProp) => any;

    GetDataConfigMeta(): Record<string, ParamMeta>;

    GetStyleConfigMeta(): Record<string, ParamMeta>;
}

export {ParamMeta, ParamValue, IComponentEntity, ObjectInputType}

