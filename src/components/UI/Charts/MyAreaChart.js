import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

const BasicWithRightAlignedLegend = (props) => {
  const divStyle = {
    height: '215px',
    width: '100%',
  } 
  const name = (props.name) ? props.name : 'Random'
  let startDate = new Date().getTime()
  let data = [...Array(20)].map((d,i) => {
    return {
      name: name,
      x: new Date(startDate + i*3600000).toISOString(),
      //x: i,
      y: Math.random()*1000
    }
  })
  return (
  <div style={divStyle}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Area chart example"
        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        //legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
        legendData={[{ name: name }]}
        legendOrientation="vertical"
        legendPosition="right"
        height={300}
        maxDomain={{y: 1000}}
        padding={{
          bottom: 30,
          left: 50,
          right: 100, // Adjusted to accommodate legend
          top: 10
        }}
        width={1000}
      >
        <ChartAxis 
          fixLabelOverlap 
          tickFormat={(val) => {
            let d = new Date(val)
            return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`
          }} 
          tickCount={3}/>
        <ChartAxis dependentAxis showGrid />
        <ChartGroup>
          <ChartArea
            data={data}
            interpolation="monotoneX"
          />
          {/*<ChartArea
            data={[
              { name: 'Birds', x: '2015', y: 1 },
              { name: 'Birds', x: '2016', y: 2 },
              { name: 'Birds', x: '2017', y: 3 },
              { name: 'Birds', x: '2018', y: 2 },
              { name: 'Birds', x: '2019', y: 4 }
            ]}
            interpolation="monotoneX"
          /> */}
        </ChartGroup>
      </Chart>
    </div>
  )
}

export default BasicWithRightAlignedLegend;