const Store = {
    // 每个选项的默认高度
    defaultHeight: 30,
    defaultWidth: 100,
    // 缓存位置信息 [0, 40, 80]，二分法找到索引位置，从选项列中获取选项信息
    // cachePosition: [],
    // 选项信息{label:'xxx', value:'', y:20}
    options: []
}

export default Store
