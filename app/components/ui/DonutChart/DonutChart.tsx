'use client'

import { PieChart as MUIPieChart, PieChartProps as MUIPieChartProps } from '@mui/x-charts/PieChart'

export type DonutChartDatum = { id: string; label: string; value: number; color: string }

export type DonutChartProps = Omit<MUIPieChartProps, 'series'> & {
  data: DonutChartDatum[]
  /** Inner radius as a pixel value or percentage string. */
  innerRadius?: number | string
}

const DonutChart: React.FC<DonutChartProps> = ({ data, innerRadius = '62%', ...props }) => {
  return (
    <MUIPieChart
      hideLegend
      series={[{ data, innerRadius, outerRadius: '100%', paddingAngle: 1, cornerRadius: 3 }]}
      {...props}
    />
  )
}

export default DonutChart
