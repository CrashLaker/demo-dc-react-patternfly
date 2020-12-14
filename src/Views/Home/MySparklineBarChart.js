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
  let data = [...Array(8)].map((d,i) => {
    return {
      name: name,
      //x: new Date(startDate + i*3600000).toISOString(),
      x: i,
      y: Math.random()*100
    }
  })

  const th = [20,70]
  const colors = ['#0066CC', '#F4C145', '#A30000']
  const bands = [...Array(th.length+1)].map(() => [])
  console.log('bands', bands)
  for (let i in data){
    if (data[i].y > th[th.length-1]){
      bands[bands.length-1].push(data[i])
      continue
    }
    for (let y in th){
      if (data[i].y < th[y]){
        bands[y].push(data[i])
        break
      }
    }
  }

  console.log('bands', bands)

  let bars = []
  for (let i in bands){
    bars.push(
      <ChartBar
        barWidth={10}
        style={{data: {fill: colors[i]}}}
        data={bands[i]}
      />
    )
  }
  
  return (
    <div className="ws-react-charts-sparkline-overflow">
      <div style={{ height: '60px', width: '120px' }}>
        <ChartGroup
          ariaDesc="Average number of pets"
          ariaTitle="Sparkline chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}
          height={80}
          //maxDomain={{y: 9}}
          padding={{
            top: 20,
          }}
          themeColor={ChartThemeColor[color]}
          width={90}
        >
          {bars}
        </ChartGroup>
      </div>
    </div>
  )
}

export default MySparklineChart;
