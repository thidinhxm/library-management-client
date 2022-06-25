import classes from './Chart.module.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Jan', total: 1200},
  { name: 'Feb', total: 1500},
  { name: 'Mar', total: 1100},
  { name: 'Apr', total: 2500},
  { name: 'May', total: 1700},
  { name: 'Jun', total: 1000},
  { name: 'Jul', total: 800},
  { name: 'Aug', total: 2500},
  { name: 'Sep', total: 2700},
  { name: 'Oct', total: 2300},
  { name: 'Nov', total: 2200},
  { name: 'Dec', total: 3000},
];
const Chart = ({ aspect, title }) => {
  return (
    <div className={classes.chart}>
      <div className={classes.title}>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={200} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className={classes.chartGrid}/>
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart