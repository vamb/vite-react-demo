const P11Constant = {}

P11Constant.UPDATE_DATA = 'update_data'

P11Constant.STORE_KEY = 'P11_TAB_KEY'

P11Constant.TABS_MAP = {
  TAB1: { key: 'P11_TAB_1', label: '3作用域' },
  TAB2: { key: 'P11_TAB_2', label: 'algorithm' },
  TAB3: { key: 'P11_TAB_3', label: 'TAB3' },

}

P11Constant.DEMO_11_0_GROUP_MAP = {
  GROUP1: { label: 'Group1', value: 'G1' },
  GROUP2: { label: 'Group2', value: 'G2' },
}

P11Constant.DEMO_11_0_CORES = [
  { label: '0', value: '0', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  { label: '1', value: '1', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  { label: '2', value: '2', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  { label: '3', value: '3', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  { label: '4', value: '4', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
  { label: '5', value: '5', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
  { label: '6', value: '6', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
  { label: '7', value: '7', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
]

P11Constant.DEMO_11_0_CORES_MAP = {
  '0': { label: '0', value: '0', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  '1': { label: '1', value: '1', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  '2': { label: '2', value: '2', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  '3': { label: '3', value: '3', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP1.value },
  '4': { label: '4', value: '4', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
  '5': { label: '5', value: '5', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
  '6': { label: '6', value: '6', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
  '7': { label: '7', value: '7', groupKey: P11Constant.DEMO_11_0_GROUP_MAP.GROUP2.value },
}

P11Constant.DEMO_11_0_REQ_CORE_COUNT_OPTS = [
  { label: '1个', value: 1 },
  { label: '2个', value: 2 },
  { label: '4个', value: 4 },
  { label: '8个', value: 8 },
]

P11Constant.DEMO_11_0_REQ_CORE_COUNT_OPPO = {
  ONE: { label: '1个', value: 1 },
  TWO: { label: '2个', value: 2 },
  FOUR: { label: '4个', value: 4 },
  EIGHT: { label: '8个', value: 8 },
}

P11Constant.DEMO_11_0_REQ_CORE_COUNT_MAP = {
  1: { label: '1个', value: 1 },
  2: { label: '2个', value: 2 },
  4: { label: '4个', value: 4 },
  8: { label: '8个', value: 8 },
}

export default P11Constant
