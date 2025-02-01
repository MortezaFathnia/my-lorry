type ColumnType = {
  field: string;
  headerName: string;
  flex: number;
  minWidth: number;
  headerAlign?: 'left' | 'center' | 'right';
  align?: 'left' | 'center' | 'right';
};

export const columns:ColumnType[] = [
  {
    field: 'id',
    headerName: 'No.',
    flex: 1.5,
    minWidth: 200
  },
  {
    field: 'driver',
    headerName: 'Driver',
    flex: 0.5,
    minWidth: 80,
  },
  {
    field: 'mileage',
    headerName: 'Mileage (km)',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 80,
  },
  {
    field: 'date',
    headerName: 'Date',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 100,
  },
  {
    field: '',
    headerName: 'endorse',
    headerAlign: 'right',
    align: 'right',
    flex: 1,
    minWidth: 120,
  }
];