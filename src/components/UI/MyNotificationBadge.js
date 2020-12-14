import { useState } from 'react';
import { NotificationBadge, PopoverPosition } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

const NotBadge = (props) => {
  const [count, setCount] = useState(30);
  const [variant, setVariant] = useState('read');
  const [variantId, setVariantId] = useState(0);
  const variants = ['read', 'unread', 'attention']
  const onClick = () => {
    setCount(count+1)
    setVariant(variants[variantId%3])
    setVariantId(variantId+1)
  };

  return (
    <div className="pf-t-dark" onClick={props.onToggle}>
      <NotificationBadge 
        variant={variant} 
        onClick={onClick} 
        aria-label="First notifications" 
        count={count} />
    </div>
  );
}

export default NotBadge;