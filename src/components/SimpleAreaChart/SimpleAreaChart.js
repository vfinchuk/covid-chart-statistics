import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts'
import {CASE_TYPES_COLORS, CHART_OPTIONS} from '../../constants'

const SimpleAreaChart = ({caseType, data}) => {
  return (
    <AreaChart
      width={CHART_OPTIONS.width}
      height={CHART_OPTIONS.height}
      margin={{...CHART_OPTIONS.offsets}}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey={CHART_OPTIONS.dataKey} />
      <YAxis width={100} fontSize={12} />
      <Tooltip/>
      <Area
        type="monotone"
        dataKey={caseType}
        stroke={CASE_TYPES_COLORS[caseType]}
        fill={CASE_TYPES_COLORS[caseType]}
      />
    </AreaChart>
  )
}

export default React.memo(SimpleAreaChart)
