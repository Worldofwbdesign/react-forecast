import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round( _.sum(data) / data.length );
}

export default (props) => {
  return (
    <td>
      <Sparklines width={180} height={120} data={props.data} limit={60}>
        <SparklinesLine color={props.color}/>
        <SparklinesSpots />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <span>{average(props.data)} {props.units}</span>
    </td>
  )
}
