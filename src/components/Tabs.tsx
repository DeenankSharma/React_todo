// import { todos } from '../constants'
import '../fanta.css'
import { TabsProps } from '../types'

export function Tabs(props:TabsProps) {
  const tabs = ['All', 'Open', 'Completed']
  return (
    <nav style={{"margin":"5px"}
    } className="tab-container" >
      {tabs.map((tab, index) => {
        const numOfTabs = tab === 'All' ?
          props.todos.length :
          tab === 'Open' ?
            props.todos.filter(val => val.completed === false).length :
            props.todos.filter(val => val.completed === true).length
        return (<>
          <button style={{"margin":"5px"}} onClick={()=>{props.setSelectedTab(tab)}} className={"tab-button " + (tab === props.selected ? ' tab-selected': ' ')} key={index}>{tab}<span> {numOfTabs}</span></button>
        </>)
      })}
    </nav>
  )

}