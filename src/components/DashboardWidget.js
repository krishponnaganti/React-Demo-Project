import React, { forwardRef, Suspense, useState } from 'react';

const loadWidget = widget => {
  // Due to StackBlitz limitaion, I was not able to make it work dynamically
  // But this switch case can be easily replaced with following dynamic code
  // return React.lazy(() => import(`../widget/${widget.id}.tsx`));
  switch (widget.id) {
    case 'IncrementWidget':
    //   return () => import(`../widget/IncrementWidget.tsx`);
    return React.lazy(() => import(`../widget/${widget.id}`));
    case 'DecrementWidget':
    //   return () => import(`../widget/DecrementWidget.tsx`);
    return React.lazy(() => import(`../widget/${widget.id}`));
    case 'ImageWidget':
    //   return () => import(`../widget/ImageWidget.tsx`);
    return React.lazy(() => import(`../widget/${widget.id}`));
    default:
      return null;
  }
};

 const DashboardWidget = forwardRef((props, ref) => {
  const { widget } = props;
  console.log(props);
  const [WidgetComponent] = useState(loadWidget(widget));
    return (
    <div ref={ref} {...props}>
      <Suspense fallback={<>Loading</>}>
        <WidgetComponent />
        {props.children}
      </Suspense>
    </div>
  );
});
export default DashboardWidget;