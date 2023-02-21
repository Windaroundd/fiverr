const CardTabLabel = () => {
  return (
    <div className="tabs">
      <label data-tab-target="#basic" className="tab active">
        Basic
      </label>
      <label data-tab-target="#standard" className="tab">
        Standard
      </label>
      <label data-tab-target="#premium" className="tab">
        Premium
      </label>
    </div>
  )
}

export default CardTabLabel
