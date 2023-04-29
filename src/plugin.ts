interface ParamMeta {
  type: string;
  unit?: string;
  filter?: any;
  label?: string;
  flowConfig?: any;
}

interface IComponentEntity {
  GetDefaultConfig(): ElementProp;

  renderRunner(): (prop: ElementProp) => any;

  renderPreview(): (prop: ElementProp) => any;

  GetDataConfigMeta(): Record<string, ParamMeta>;

  GetStyleConfigMeta(): Record<string, ParamMeta>;
}
