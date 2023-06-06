import {ElementProp} from "./element_prop";

interface ParamMeta {
    type: string;
    unit?: string;
    filter?: any;
    label?: string;
    flowConfig?: any;
    defaultData?: any;
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

export {ParamMeta, ParamValue, IComponentEntity}

