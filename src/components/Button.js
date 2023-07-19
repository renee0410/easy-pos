// icons
import Icon from '@mdi/react';

export function Button({ style, iconPath, text }) {
  return (
    <button className= {`btn ${style}`}>
      { 
        iconPath ? 
          (
            <div className="icon">
              <Icon path={iconPath}></Icon>
            </div>
          ) :
          ''
      }
      { 
        text ? (text) : ''
      }
    </button>
  )
}