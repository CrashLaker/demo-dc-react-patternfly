import React from 'react';
import { 
  ChartArea, 
  ChartBar,
  ChartContainer, 
  ChartGroup, 
  ChartLabel, 
  ChartThemeColor, 
  ChartVoronoiContainer,
} from '@patternfly/react-charts';

const MySparklineChart = (props) => {
  console.log(ChartThemeColor) 

  const color = props.color ? props.color : 'blue'

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
    <div className="ws-react-charts-sparkline-overflow">
      <div style={{ height: '40px', width: '100%' }}>
        <ChartGroup
          ariaDesc="Average number of pets"
          ariaTitle="Sparkline chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}
          height={20}
          //maxDomain={{y: 9}}
          padding={0}
          themeColor={ChartThemeColor[color]}
          width={400}
        >
          <ChartBar
            data={data}
          />
        </ChartGroup>
      </div>
      <ChartContainer height={30}>
        <ChartLabel text={name} dy={15} style={{height: '60px !important'}}/>
      </ChartContainer>
    </div>
  )
}

export default MySparklineChart;