import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import SlideItem from './components/SlideItem'
import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeSlide: initialSlidesList[0].id,
    slidesList: initialSlidesList,
    headFocus: false,
    descFocus: false,
  }

  onChangeActiveSlide = id => {
    this.setState({activeSlide: id})
  }

  onChangeActiveHeading = event => {
    const {activeSlide, slidesList} = this.state
    const newSlidesList = slidesList.map(eachItem => {
      if (eachItem.id === activeSlide) {
        return {
          id: eachItem.id,
          heading:
            event.target.value === '' || eachItem.description === ''
              ? 'Heading'
              : event.target.value,
          description: eachItem.description,
        }
      }
      return eachItem
    })
    this.setState({slidesList: newSlidesList})
  }

  onChangeActiveDesc = event => {
    const {activeSlide, slidesList} = this.state
    const newSlidesList = slidesList.map(eachItem => {
      if (eachItem.id === activeSlide) {
        return {
          id: eachItem.id,
          heading: eachItem.heading,
          description:
            event.target.value === '' || eachItem.description === ''
              ? 'Description'
              : event.target.value,
        }
      }
      return eachItem
    })
    this.setState({slidesList: newSlidesList})
  }

  onAddNewSlide = () => {
    const {activeSlide, slidesList} = this.state
    const activeTabSlide = slidesList.filter(
      eachItem => eachItem.id === activeSlide,
    )
    console.log(activeTabSlide)
    const index = slidesList.indexOf(activeTabSlide[0])
    const newSlide = {
      id: uuidV4(),
      heading: 'Heading',
      description: 'Description',
    }
    const newList = [
      ...slidesList.slice(0, index),
      newSlide,
      ...slidesList.slice(index),
    ]
    this.setState({slidesList: newList, activeSlide: newSlide.id})
  }

  changeHeadFocus = () => {
    this.setState(prevState => ({headFocus: !prevState.headFocus}))
  }

  changeHeadFocusOut = () => {
    this.setState({headFocus: false})
  }

  changeDescFocus = () => {
    this.setState(prevState => ({descFocus: !prevState.descFocus}))
  }

  render() {
    const {activeSlide, slidesList, headFocus, descFocus} = this.state
    const activeTabSlide = slidesList.filter(
      eachItem => eachItem.id === activeSlide,
    )
    console.log(activeTabSlide)
    return (
      <div className="bg">
        <div className="bg1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="logo"
          />
          <h1>Nxt Slides</h1>
        </div>
        <div className="bg2">
          <button type="button" className="newBtn" onClick={this.onAddNewSlide}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plusLogo"
            />
            <p>New</p>
          </button>
          <div className="bg21">
            <ol className="slidesList">
              {slidesList.map(eachItem => (
                <SlideItem
                  key={eachItem.id}
                  item={eachItem}
                  index={slidesList.indexOf(eachItem)}
                  isActive={eachItem.id === activeSlide}
                  onChangeActiveSlide={this.onChangeActiveSlide}
                />
              ))}
            </ol>
            <div className="eachSlide1">
              <div className="eachSlide">
                {headFocus ? (
                  <input
                    type="text"
                    value={activeTabSlide[0].heading}
                    onChange={this.onChangeActiveHeading}
                    className="heading"
                    onBlur={this.changeHeadFocus}
                  />
                ) : (
                  <h1 onClick={this.changeHeadFocus}>
                    {activeTabSlide[0].heading}
                  </h1>
                )}
                {descFocus ? (
                  <input
                    type="text"
                    value={activeTabSlide[0].description}
                    onChange={this.onChangeActiveDesc}
                    className="description"
                    onBlur={this.changeDescFocus}
                  />
                ) : (
                  <p onClick={this.changeDescFocus}>
                    {activeTabSlide[0].description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
