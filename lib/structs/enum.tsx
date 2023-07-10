// eslint-disable-next-line import/prefer-default-export
enum ParamTypeEnum {
    Input = 'input',
    InputNumber = 'input_number',
    Percentage = 'percentage',
    Object = 'object',
    Flow = 'flow',
    Record = 'record',
}

enum FieldTypeEnum {
    String = 'string',
    Video = 'video',
    Number = 'number',
    Float = 'float',
    Img = 'img',
}

enum RecordTypeEnum {
    String = 'string',
    Video = 'video',
    Number = 'number',
    Float = 'float',
    Img = 'img',
    Object = 'object',
    List = 'list',
    Any = 'any',
    AnyWithList = 'any_with_list'
}


// eslint-disable-next-line import/prefer-default-export
export {ParamTypeEnum, FieldTypeEnum, RecordTypeEnum};
