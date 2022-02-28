import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import StopsAPI from "../api/stops";

export const StopSchedule = ({ stopNumber }) => {
  const [ scheduledStops, setScheduledStops ] = useState([]);

  useEffect(async () => {
    if (!scheduledStops.length) {
      const stop_schedule = await StopsAPI.getStopSchedule(stopNumber);
      let scheduled_stops = [];

      const routeSchedules = stop_schedule['stop-schedule']['route-schedules'];

      routeSchedules.forEach((routeSchedule) => {
        const { route } = routeSchedule;
        routeSchedule['scheduled-stops'].forEach((ss) => {
          scheduled_stops.push({ ...ss, route });
        });
      })

      setScheduledStops(scheduled_stops);
    }
  }, [stopNumber]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label={"stop schedule"}>
          <TableHead>
            <TableRow>
              <TableCell>Route</TableCell>
              <TableCell>Scheduled Time</TableCell>
              <TableCell>Estimated Time</TableCell>
              <TableCell>How Late?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduledStops.map((ss) => {
              const scheduled_time = moment(ss.times.arrival.scheduled);
              const estimated_time = moment(ss.times.arrival.estimated);
              const diff = estimated_time.diff(scheduled_time, 'minutes', true);

              return (
                <TableRow
                  key={ss.key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{ss.route.number}</TableCell>
                  <TableCell>{scheduled_time.format('hh:mma')}</TableCell>
                  <TableCell>{estimated_time.format('hh:mma')}</TableCell>
                  <TableCell>{diff} minutes</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default StopSchedule;