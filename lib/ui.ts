import {ElementProp} from "./element_prop";

interface PageMeta {
    title: string;
    ID?: string;
    // 页面样式
    style?: StyleMeta;
    // 组件
    components?: ElementProp[];
}

interface StyleMeta {
    // 基础格式
    width?: number;
    height?: number;
    top?: number;
    left?: number;
    layers?: number;
}

export {StyleMeta, PageMeta}
