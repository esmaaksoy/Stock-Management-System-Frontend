import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";
import EditIcon from "@mui/icons-material/Edit";
const SaleTable = ({handleOpen, setData}) => {
  const { sales } = useSelector((state) => state.stock);
  const { deleteStocks } = useStockCalls();
  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
      renderCell: ({ row }) => row.createdAtStr.slice(0,22),
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1,
      renderCell: ({ row }) => row?.brandId?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      flex: 1,
      renderCell: ({ row }) => row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
        field: "price",
        headerName: "Price",
        flex: 1,
      },
      {
        field: "amount",
        headerName: "Amount",
        flex: 1,
      },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row: { brandId, price, quantity, productId, _id } }) => {
        return [
          <GridActionsCellItem
            key="edit"
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen()
              setData({ brandId, price, quantity, productId, _id })
            }}
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteForeverIcon />}
            label="Delete"
            onClick={() => deleteStocks("sales", _id)}
          />,
        ]
      },
    },
  ];

  const getRowId = (row) => row._id;
  return (
    <div className="h-[400px] w-[100%] dark:bg-white rounded-lg shadow-2xl">
      <DataGrid
        autoHeight
        rows={sales}
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
