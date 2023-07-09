import './index.css'

const SlideItem = props => {
  const {item, index, isActive, onChangeActiveSlide} = props
  const {id, heading, description} = item
  const activeClass = isActive && 'colored'

  const changeActive = () => {
    onChangeActiveSlide(id)
  }

  return (
    <li
      className={`slideItem1 ${activeClass}`}
      onClick={changeActive}
      testid={`slideTab${index + 1}`}
    >
      <p>{index + 1}</p>
      <div className="slideItem" testid="slide">
        <h1 className="head">{heading}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default SlideItem
