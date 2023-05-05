interface ElementProp {
  id?: string;
  style: {
    left?: string;
    top?: string;
    position?: any;
    height?: number;
    width?: number;
  };
  title?: string;
  data?: any;
  isPreview?: boolean;
  type: string;
  sub?: ElementProp[];
  page?: string;
}

export {ElementProp}