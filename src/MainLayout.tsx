import { DataGrid } from '@mui/x-data-grid';

export const MainLayout = () => {
  const rows = [
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3 },
  ];
  const columns = [
    { field: 'a', headerName: 'a', width: 130 },
    { field: 'b', headerName: 'b', width: 130 },
    { field: 'c', headerName: 'c', width: 130 },
  ];

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </>
  );
};
