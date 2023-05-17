import {ElementProp} from "./element_prop";

interface ParamMeta {
    type: string;
    unit?: string;
    filter?: any;
    label?: string;
    flowConfig?: any;
}

interface ParamValue {
    meta:ParamMeta;
    value:any;
}

interface IComponentEntity {
    GetDefaultConfig(): ElementProp;

    renderRunner(): (prop: ElementProp) => any;

    renderPreview(): (prop: ElementProp) => any;

    GetDataConfigMeta(): Record<string, ParamMeta>;

    GetStyleConfigMeta(): Record<string, ParamMeta>;
}

export {ParamMeta,ParamValue, IComponentEntity}