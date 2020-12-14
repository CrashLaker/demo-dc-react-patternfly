
import * as PatternflyIcons from '@patternfly/react-icons/dist/js/icons/';
import defaultColors from '../shared/colors'

const keyMap = {
  'shield': 'ShieldAltIcon'
}

export default (iconKey, props={}) => {

  if ((iconKey in keyMap)){
    iconKey = keyMap[iconKey]
  }

  if ((iconKey in PatternflyIcons)){
    const Comp = PatternflyIcons[iconKey]
    if (props && props.fill && 
          (props.fill in defaultColors)){
      props.fill = defaultColors[props.fill]
    }

    return <Comp {...props}/>
  }
  return null
}