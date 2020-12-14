import React from 'react';
import { 
  Chart, 
  ChartAxis, 
  ChartBar, 
  ChartGroup, 
  ChartVoronoiContainer,
  ChartThemeColor
 } from '@patternfly/react-charts';

const BarChart = () => {

  const renderData = name => {
    let startDate = new Date().getTime()
    return [...Array(20)].map((d,i) => {
      return {
        name: name,
        x: new Date(startDate + i*3600000).toISOString(),
        //x: i,
        y: Math.random()*1000
      }
    })
  }

  return (
    <div style={{ height: '250px', width: '100%' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Bar chart example"
        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
        //domain={{y: [0,9]}}
        //domainPadding={{ x: [30, 25] }}
        //legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
        //legendOrientation="vertical"
        //legendPosition="right"
        height={250}
        padding={{
          bottom: 50,
          //left: 50,
          //right: 200, // Adjusted to accommodate legend
          top: 50
        }}
        width={200}
      >
        <ChartAxis tickFormat={() => ''} />
        <ChartGroup offset={11}
        >
          <ChartBar 
            style={{ data: {fill: '#0066CC'} }}
            data={renderData('cats')} 
          />
          <ChartBar 
            style={{ data: {fill: '#7D1007'} }}
            data={renderData('dogs')} 
          />
          {/*<ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
          <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
          <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
          */}
        </ChartGroup>
      </Chart>
    </div>
  )
}

export default BarChart;