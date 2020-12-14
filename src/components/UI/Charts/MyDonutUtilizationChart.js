import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';
import { Th } from '@patternfly/react-table';

class ThresholdChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      used: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { used } = this.state;
      this.setState({ used: (used + 10) % 100 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { used } = this.state;
    return (
      <div style={{ height: '185px', width: '400px' }}>
        <ChartDonutThreshold
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea={true}
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          height={185}
          labels={({ datum }) => datum.x ? datum.x : null}
          padding={{
            bottom: 20,
            left: 20,
            right: 260, // Adjusted to accommodate legend
            top: 20
          }}
          width={425}
        >
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: used }}
            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}
            legendOrientation="vertical"
            subTitle="of 100 GBps"
            title={`${used}%`}
            thresholds={[{ value: 60 }, { value: 90 }]}
          />
        </ChartDonutThreshold>
      </div>
    );
  }
}

export default ThresholdChart;