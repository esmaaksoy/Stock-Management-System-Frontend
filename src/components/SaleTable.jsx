import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";
import EditIcon from "@mui/icons-material/Edit"
const SaleTable = () => {
  const { products } = useSelector((state) => state.stock);
  const { deleteStocks } = useStockCalls();
  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 1.4,
      minWidth: "150px",

      sortable: false,
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1,

      valueGetter: (props) => {
        return props.row?.categoryId?.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      valueGetter: (props) => props.row?.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (props) => [
        <GridActionsCellItem
        icon={<EditIcon />}
        //   onClick={() => deleteStocks("products", props.id)}
          label="edit"
        />,
        <GridActionsCellItem
        icon={<DeleteForeverIcon />}
        onClick={() => deleteStocks("products", props.id)}
        label="Delete"
      />,
      ],
    },
  ];
  const getRowId = (row) => row._id;
  return (
    <div className="h-[400px] w-[100%] dark:bg-white rounded-lg shadow-2xl">
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default SaleTable;
