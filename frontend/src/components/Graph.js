import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import config from './config'

import './graph.css'

class Graph extends React.Component {

    render() {
        return (
            <div style={{width: '100%', height:"40vh", marginBottom: 5}} className="chart">
                <ResponsiveBar
                    data={this.props.data}
                    keys={config.keys}
                    indexBy="element"
                    margin={config.margin}
                    padding={0.3}
                    colors="#26d994"
                    colorBy="id"
                    defs={config.defs}
                    fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={config.legends}
                />
            </div>
        )
    }
}

export default Graph