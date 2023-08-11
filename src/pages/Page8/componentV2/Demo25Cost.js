const Demo25Cost = {}

Demo25Cost.OPTIONS = [
  { label: 'row', value: 'row' },
  { label: 'row-reverse', value: 'row-reverse' },
  { label: 'column', value: 'column' },
  { label: 'column-reverse', value: 'column-reverse' },
]

Demo25Cost.ITEMS_OPT = [
  { label: 'start', value: 'start' },
  { label: 'end', value: 'end' },
  { label: 'center', value: 'center' },
  { label: 'stretch', value: 'stretch' },
]

Demo25Cost.JUSTIFY_CONTENT = [
  { label: 'start', value: 'start' },
  { label: 'end', value: 'end' },
  { label: 'center', value: 'center' },
  { label: 'space-between', value: 'space-between' }, /* 均匀排列每个元素 首个元素放置于起点，末尾元素放置于终点 */
  { label: 'space-around', value: 'space-around' }, /* 均匀排列每个元素 每个元素周围分配相同的空间 */
  { label: 'space-evenly', value: 'space-evenly' },/* 均匀排列每个元素 每个元素之间的间隔相等 */
  { label: 'stretch', value: 'stretch' }, /* 均匀排列每个元素 'auto'-sized 的元素会被拉伸以适应容器的大小 */
]

Demo25Cost.DIRECTION = [
  { label: 'ltr', value: 'ltr' },
  { label: 'rtl', value: 'rtl' },
]

Demo25Cost.WRITE_MODE = [
  { label: 'vertical-rl', value: 'vertical-rl' },
  { label: 'vertical-lr', value: 'vertical-lr' },
  { label: 'horizontal-tb', value: 'horizontal-tb' },
]

export default Demo25Cost
