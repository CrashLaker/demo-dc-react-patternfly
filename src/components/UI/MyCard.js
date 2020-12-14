import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Text,
  ContextSelector,
} from '@patternfly/react-core'

import ShieldIcon from '@patternfly/react-icons/dist/js/icons/shield-alt-icon';
import ExclamationIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';

import * as PatternflyIcons from '@patternfly/react-icons/dist/js/icons/';


const componentMap = key => {
  let iconStyle = {
    width: '15px',
    height: '15px',
  }
  const mapKey = {
    warning: {
      key: 'ExclamationTriangleIcon',
      style: {fill: '#F0AB00'}
    },
    error: {
      key: 'TimesCircleIcon',
      style: {fill: '#c9190b'},
    },
    check: {
      key: 'CheckCircleIcon',
      style: {fill: '#6CA100'},
    },
    shield: 'ShieldAltIcon'
  }
  if ((key in mapKey)){
    let mapped = mapKey[key]
    if (typeof(mapped) === String){
      key = mapped
    }else{
      key = mapped.key
      iconStyle = {...iconStyle, ...mapped.style}
    }
  }
  let Comp = PatternflyIcons[key]
  let props = {
    style: iconStyle
  }
  return [Comp, props]
}

const MyCard = (props) => {
  /*
  props.meta = {
    title: String,
    badges: [
      {
        iconRef: String,
        value: String
      }
    ]
  }
  */
  const titleStyle = {
    textAlign: 'center',
    margin: 0,
    padding: 0,
    paddingTop: '10px',
    boxSizing: 'border-box',
  }
  const bodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0, margin: 0,
    padding: '7px',
  }
  const iconStyle = {
    fill: '#c9190b',
    width: '15px',
    height: '15px',
  }
  const barStyle = {
    width: '5px'
  }
  const textStyle = {
    fontSize: '20px', 
    fontWeight: '100', 
    marginLeft: '10px'
  }
  let renderList = [] 
  
  for (let idx in props.meta.badges){
    let elem = props.meta.badges[idx]
    let [Comp, compProps] = componentMap(elem.icon)
    renderList.push((
      <li key={idx}>
        <Comp {...compProps}/>
        <Text style={textStyle}>{elem.text}</Text>
      </li>
    ))
  }

  return (
    <Card>
      <CardTitle style={titleStyle}>
        {/*<ShieldIcon /> 3 Data Centers*/}
        {props.meta.title}
      </CardTitle>
      <CardBody style={bodyStyle}>
        <ul className="cardStatusList">
          {renderList}
          {/*<li style={bodyStyle}>
            <TimesCircleIcon {...iconStyle}/> 
            <Text style={{fontSize: '25px', fontWeight: '100', marginLeft: '10px'}}>2</Text>
          </li>
          <li style={bodyStyle}>
            <ExclamationTriangleIcon {...{...iconStyle, fill: '#F0AB00'}}/> 
            <Text style={{}}>4</Text>
          </li>
          */}
        </ul> 
      </CardBody>
    </Card>
  )
}


export default MyCard;