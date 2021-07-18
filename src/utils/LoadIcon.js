import {
  Spinner,
} from '@patternfly/react-core';
import * as PatternflyIcons from '@patternfly/react-icons/dist/js/icons/';
import defaultColors from '../shared/colors'

const mapKey = {
  warning: {
    key: 'ExclamationTriangleIcon',
    style: {fill: '#F0AB00'},
  },
  error: {
    key: 'TimesCircleIcon',
    style: {fill: '#c9190b'},
  },
  running: {
    key: 'InProgressIcon',
    style: {fill: '#69c0ff'},
  },
  check: {
    key: 'CheckCircleIcon',
    style: {fill: '#6ca100'},
  },
  'shield': 'ShieldAltIcon'
}

export default (iconKey, props={}) => {
  if (iconKey == 'spinner'){
    const style = (props.style) ? props.style : {}
    return <Spinner isSVG={true} size="sm" style={{marginRight: '3px', ...style}}/>
  }

  let useKey = {}

  if ((iconKey in mapKey)){
    if (typeof(mapKey[iconKey]) == 'string'){
      useKey = {key: mapKey[iconKey]}
    }else{
      iconKey = mapKey[iconKey]
    }
  }

  if ((useKey.key in PatternflyIcons)){
    const Comp = PatternflyIcons[useKey.key]
    if (props && props.fill && 
          (props.fill in defaultColors)){
      props.fill = defaultColors[props.fill]
    }
    props = {
      ...props,
      style: {
        ...props.style,
        ...useKey.style
      }
    }
    return <Comp {...props}/>
  }
  return null
}