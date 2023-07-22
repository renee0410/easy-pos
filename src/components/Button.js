// icons
import Icon from '@mdi/react';

export function Button({ style, iconPath, text, onClick }) {
  return (
    <button className= {`btn ${style}`} onClick={onClick}>
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