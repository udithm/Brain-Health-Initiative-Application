import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

import { Animation } from '@devexpress/dx-react-chart';
import { NavBar } from '../components/NavBar';
export const AnalyticsView = ({apiData}) => {
return(<>
  <NavBar></NavBar>
      <Paper>
        <Chart
          data={apiData}
          
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="count"
            argumentField="State"
          />
          <Title text="PHC count" />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
  </>
);
}