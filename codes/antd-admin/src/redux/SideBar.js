/* 定义action creator */
export const sidebarCollapseCreator = () => {
  return { type: 'SIDEBAR_COLLAPSE' };
};

/* 定义初始状态, 每个组件只需要关心自己的状态 */
const initState = {
  collapse: false,  // 是否折叠
};

/* 定义reducer, 每个组件只有一个reducer */
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'SIDEBAR_COLLAPSE':
      return { ...state, collapse: !state.collapse };
    default: // 注意必须要有default语句
      return state;
  }
};

/* 导出的字段名称固定, 方便后续的store去处理 */
export default { initState, reducer };
