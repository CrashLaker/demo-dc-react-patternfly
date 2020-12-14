import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { 
  ToggleGroup, 
  ToggleGroupItem,
  Pagination,
  PaginationVariant,
} from '@patternfly/react-core';

import LoadIcon from '../../utils/LoadIcon'

const SimpleTable = (props) => {

  const columns = ['Hostname', 'Status', 'IP', 'OS', 'Link'];

  let rows = []

  for (let i = 0; i < 10; i++){
    let row = [
      'EC2_'+i,
      (
        <React.Fragment>
        {((parseInt((Math.random() * 100))%2 == 0 ) 
              ? LoadIcon('CheckCircleIcon', {fill: 'green'})
              : LoadIcon('ExclamationTriangleIcon', {fill: 'gold-300'}))}
        </React.Fragment>
      ),
      '10.0.0.'+(i+1),
      'RHEL 7',
      LoadIcon('OutlinedArrowAltCircleRightIcon', {fill: 'blue-400'})
    ]
    rows.push({
      cells: row.map((d,idx) => {
        return {
          title: d,
          props: {column: columns[idx]}
        }
      })
    })
  }

  console.log(rows)

  return (
    <React.Fragment>
      <Table
        aria-label="Simple Table"
        variant='compact'
        borders={false}
        cells={columns}
        rows={rows}
      >
        <TableBody />
      </Table>
      <Pagination
        isCompact
        id="page-layout-table-column-management-action-toolbar-bottom"
        itemCount={37}
        widgetId="pagination-options-menu-bottom"
        page={1}
        variant={PaginationVariant.bottom}
      />
    </React.Fragment>
  );
}

export default SimpleTable;