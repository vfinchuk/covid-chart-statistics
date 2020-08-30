import React from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import dateFilter from '../../utils/date.filter'
import {CASE_TYPES_COLORS, CHART_OPTIONS} from '../../constants'

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0

  return toPercent(ratio, 2)
}

const toDate = (date) => dateFilter(date)
const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`
const renderTooltipContent = (o) => {
  const {payload, label} = o
  const date = label ? dateFilter(label) : label
  const total = payload.reduce((result, entry) => (result + entry.value), 0)

  return (
    <div
      className="customized-tooltip-content"
      style={{
        backgroundColor: CHART_OPTIONS.tooltip.backgroundColor,
        padding: CHART_OPTIONS.tooltip.padding
      }}
    >
      <p className="total">{`${date} (Total: ${total})`}</p>
      <ul className="list">
        {
          payload.map((entry, index) => (
            <li key={`item-${index}`} style={{color: entry.color}}>
              {
                `${entry.name}: ${entry.value}
              (${getPercent(entry.value, total)})`
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const PercentAreaChart = ({data}) => {
  return (
    <AreaChart
      width={CHART_OPTIONS.width}
      height={CHART_OPTIONS.height}
      margin={{...CHART_OPTIONS.offsets}}
      data={data}
      stackOffset="expand"
    >
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey={CHART_OPTIONS.dataKey} tickFormatter={toDate }/>
      <YAxis tickFormatter={toPercent} />
      <Tooltip content={renderTooltipContent}/>
      <Area
        type="monotone"
        dataKey="deaths"
        stackId="1"
        stroke={CASE_TYPES_COLORS.deaths}
        fill={CASE_TYPES_COLORS.deaths}
      />
      <Area
        type="monotone"
        dataKey="active"
        stackId="1"
        stroke={CASE_TYPES_COLORS.active}
        fill={CASE_TYPES_COLORS.active}/>
      <Area
        type="monotone"
        dataKey="recovered"
        stackId="1"
        stroke={CASE_TYPES_COLORS.recovered}
        fill={CASE_TYPES_COLORS.recovered}/>
    </AreaChart>
  )
}

export default React.memo(PercentAreaChart)
