import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabClassName}`} onClick={updateTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
